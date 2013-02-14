require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "AAACEdEose0cBAN4eQZCgW0SGhxjC5DCizNmgDK8McXfK7HnOStZBkdi9eRQWZATqLo3pggBFMvCjrq8JR4yuOTryH3tvZBmnxZA7m2V4KZAAZDZD";
@album = "10151283325498745"
@firstUrl = "https://graph.facebook.com/"+@album+"?fields=photos.limit(10)&access_token="+@token;
@allBeers = [];

def downloadChunk(url)
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	photos = result["photos"]["data"];
	
	
	
	photos.each{|value|
	    lines = value["name"].split(/\r?\n/);
	    pct = lines[0][/[0-9].*?%/]
	    if pct
	        lines[0][pct] = "";
	        pct = pct.chop
	    else
	        pct = "null"
	    end
	    score = lines[1][/[0-9].10/]
	    if score
	        lines[1][score] = "";
	        score = score.chop.chop.chop;
	    end


		hash = Hash[];
		hash["name"] = lines[0].gsub(/'/,"&qout");
		hash["desc"] = lines[1];
		hash["img"] = value["source"];
		hash["pct"] = pct;

		hash["score"] = score;
		@allBeers.push(hash);
	}
	
end

def dumpJSToFile(filename)
    puts "function addAllBeers() {"
    puts "var ret = [];"
	@allBeers.each{|beer|
		puts "ret.push(App.Beer.create({"
		puts "\tname:'"+beer["name"]+"',"
		puts "\tpct:"+(beer["pct"]||"") +","
		puts "\tdesc:'"+beer["desc"]+"',"
		puts "\tscore:"+(beer["score"]||"") +","
		puts "\timg:'"+beer["img"]+"'"
		puts "}));\n\n"
	}
	puts "return ret";
	puts "}"

end

downloadChunk(@firstUrl);

dumpJSToFile("beer.js");