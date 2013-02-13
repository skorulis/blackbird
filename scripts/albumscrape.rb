require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "AAACEdEose0cBAMkPB8wgUkR2JRls6snBMpEel51MmWPH1KsSjNM3UlA9NPvZB4fZCZBEeR8rf5IsMLtHXG79OwNeSmVPwGaZApgP01dhdQZDZD";
@album = "10151283325498745"
@firstUrl = "https://graph.facebook.com/"+@album+"?fields=photos&access_token="+@token;

def downloadChunk(url)
	puts "downloading " + url
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	photos = result["photos"]["data"];
	puts "Photos " + photos.count
end

downloadChunk(@firstUrl);