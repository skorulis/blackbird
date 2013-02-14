require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "AAACEdEose0cBAPNO8DcnOIavWEYAYRHufL08bZCZCQt0piqvkp3EoimGTs1W16ZCHvkM7iDOiyZCHKNFWe0vzkOARnjNmgLnq6WFPFjtVgZDZD";
@album = "10151283325498745"
@firstUrl = "https://graph.facebook.com/"+@album+"?fields=photos.limit(121)&access_token="+@token;
@allBeers = [];

def downloadChunk(url)
    puts url
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	photos = result["photos"]["data"];

	count = 0;
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
	    else
	        score = "null"
	    end


		hash = Hash[];
		hash["name"] = lines[0].gsub("'", "\\\\'");
		hash["desc"] = lines[1].gsub("'", "\\\\'");
		hash["img"] = value["source"];
		hash["pct"] = pct;

		hash["score"] = score;
		@allBeers.push(hash);
		count+=1;
	}
	
end

def dumpJSToFile(filename)
    file = File.new("../js/beer.js", "wb");
    ret = "function addAllBeers() {\n\n"
    ret+= "var ret = [];"
	@allBeers.each{|beer|
		ret+= "ret.push(App.Beer.create({\n"
		ret+= "\tname:'"+beer["name"]+"',\n"
		ret+= "\tpct:"+(beer["pct"]||"") +",\n"
		ret+= "\tdesc:'"+beer["desc"]+"',\n"
		ret+= "\tscore:"+(beer["score"]||"") +",\n"
		ret+= "\timg:'"+beer["img"]+"'\n"
		ret+= "}));\n\n"
	}
	ret+= "return ret;\n";
	ret+= "}\n"
	file.write(ret);

end

downloadChunk(@firstUrl);

dumpJSToFile("beer.js");

puts "Successfully wrote " + @allBeers.length.to_s() + " beers";