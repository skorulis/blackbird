require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "AAACEdEose0cBAD6pMTo7Mqh1dOSr1ygMMtRXmSyVWOAfzY5X6OAcZAL7XignniSzPXP9eJo5126ltRIqvhUCKZAHEQ0ay255uKGpg46gZDZD";
@album = "10151283325498745"
@firstUrl = "https://graph.facebook.com/"+@album+"?fields=photos.limit(10)&access_token="+@token;

def downloadChunk(url)
	puts "downloading " + url
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	photos = result["photos"]["data"];
	puts "Photos " + photos.count.to_s()
	
	photos.each{|value|
		puts value["name"];
	}
	
end

downloadChunk(@firstUrl);