tag_array = ['sports', 'video', 'music', 'news', 'tech', 'humor']

tag_array.each do |name|
    tag = Tag.new
    tag.name = name
    tag.save
end

techcrunch = Source.create(
    url: 'www.techcrunch.com',
    img_url: 'https://s3.amazonaws.com/crunchbase_prod_assets/assets/images/resized/0001/0576/10576v3-max-250x250.jpg',
    name: 'Techcrunch'
)
soundcloud = Source.create(
    url: 'www.soundcloud.com',
    img_url: 'http://cdn.embed.ly/providers/logos/soundcloud.png',
    name: 'Soundcloud'
)
youtube = Source.create(
    url: 'www.youtube.com',
    img_url: 'https://lh6.ggpht.com/NrQdFAdPSI9-hreB4C7HNhj3yXRiW1jqOOi7eFyakIx_IA-Im0huIeYCs5jTidMT2qA=w300',
    name: 'YouTube'
)
Source.create(
    url: 'www.vimeo.com',
    img_url: 'http://www.cmha.bc.ca/files/vimeo-icon.png',
    name: 'Vimeo'
)
Source.create(
    url: 'www.espn.com',
    img_url: 'https://yt3.ggpht.com/-yOoKXdob9y8/AAAAAAAAAAI/AAAAAAAAAAA/O9ATiv9wGJ0/s900-c-k-no/photo.jpg',
    name: 'ESPN'
)



33.times do 
	pin = Pin.create(
        title: ['Cool', 'Rad'].sample + " techcrunch thing", 
        url: "http://techcrunch.com/2014/03/25/htc-one-m8-specs-availability/", 
        description: "Is it just me, or does this new m8's design seem kinda lamer than last years? Eh, close enough, and the metal is nice (though the htc one x's had that storm trooper look). And you think they would bump the MP count. Touchscreen nav buttons are where its at, but they still take up that space with the lame htc logo!", 
        image_url: 'http://10up.com/wp-content/uploads/2012/02/techcrunch-home.jpg'
    ) 
	techcrunch.pins << pin
    pin.tags << Tag.find_by_name('tech')
    pin.tags << Tag.find_by_name('news')
end

33.times do 
    pin = Pin.create(
        title: ['New', 'Sick'].sample + " Song",
        url: "https://soundcloud.com/takugotbeats/closet-drake-fans",
        description: "Ta-ku has been consistanly at the top of this game for like 2 years now. Such solid, distictive in style yet unique per song, good solo and just one off remixes. and the sets are good. Like a diplo more in touch with the art. The JT of this electornica game.",
        image_url: 'http://soundisstyle.com/wp-content/uploads/2013/04/Flume-Left-Alone-Ta-Ku-Remix-612x612.jpg'
    ) 
    soundcloud.pins << pin
    pin.tags << Tag.find_by_name('music')
end

super_view = Pin.create(
        title: 'Lots of Trolly Views',
        url: "https://soundcloud.com/dailyloudradio/yg-feat-schoolboy-q-jay-rock-i?in=tlrstvnsn/sets/spring-broken",
        description: "Listening to this again and again! I just want to party!",
        image_url: 'http://cdn.hiphopdx.org//images/news/2-Kendrick-Lamar-Eminem.jpg',
        view_count: 1_000_000
) 
soundcloud.pins << super_view
super_view.tags << Tag.find_by_name('music')


youtube_pin = Pin.create(
        title: 'Trippy cluubfeet remix',
        url: "https://www.youtube.com/watch?v=8ewgt1jymCs",
        description: "the original video might be somewhat cooler or tripper in its camera effect, but this song is more jumpin. remix of the video too. taku at it again.",
        image_url: 'http://images.dazedcdn.com/786/dd/730/3/733061.jpg'
) 

youtube.pins << youtube_pin
youtube_pin.tags << Tag.find_by_name('music')
youtube_pin.tags << Tag.find_by_name('video')









