techcrunch = Source.create(url: 'www.techcrunch.com', img_url: 'http://www.placekitten.com/200/200', name: 'Techcrunch')
Source.create(url: 'www.soundcloud.com', img_url: 'http://www.placecage.com/200/200', name: 'Soundcloud')
Source.create(url: 'www.youtube.com', img_url: 'http://baconmockup.com/200/200', name: 'YouTube')
Source.create(url: 'www.vimeo.com', img_url: 'http://www.placekitten.com/200/200', name: 'Vimeo')
Source.create(url: 'www.espn.com', img_url: ' http://nicenicejpg.com/200/200', name: 'ESPN')

30.times do 
	height = rand(200..600).to_s
	width = rand(200..600).to_s
	pin = Pin.create(title: "Cool techcrunch thing", url: "http://techcrunch.com/2010/08/25/groupme-born-at-techcrunch-disrupt-secures-funding-and-launches/", description: "Cool techcrunch article", image_url: 'http://www.placekitten.com/' + height + '/' + width) 
	techcrunch.pins << pin
end


tag_array = ['sports', 'video', 'music', 'news', 'tech', 'humor']

tag_array.each do |name|
    tag = Tag.new
    tag.name = name
    tag.save
end

