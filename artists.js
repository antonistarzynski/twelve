const artists = [
    {
        name: 'A45',
        short: 'a45.html',
        pic: 'a45.jpeg',
        description: `Getting inspiration from Jeff Mills’, James Ruskin’s and Oscar Mulero’s particular sound for his latest creations, he makes the utmost use of samples of TR909 and of ‘syncopated melodies’ typical of this genre.`

    },
    {
        name: 'AFFKT',
        short: 'affkt.html',
        pic: 'affkt.jpeg',
        description: `Hailing from the Spanish mainland is a sound that’s resonating globally thanks to a select choice of producers that have been able to create their own path after years of honest and competent work. A notable character from that sub-culture of game changers is Marc Martinez Nadal, aka AFFKT, who consecrated a music career and has been a driving force behind a vivid & empowering sound that is refined by his drive for perfection. He feels deeply in communion with sounds that range from the most energetic hyper-glossy techno to the most detailed and innovative indie-electronica.

        Having worked on coining the sound of this alias since 2008, it has been a plethora of sound, place, person & culture that has provided a platform for AFFKT to experiment with his output. Both as an experienced music producer of his own projects and as a demanded remixer. Still fresh is the mind-bending rework he made for GusGus’ ‘Simple Tuesday’. And what about those created for the likes of Oliver Koletzki, Fejká, Mason or Bufi to name just a few. Dynamite!
        
        The Valencian has never stopped serving huge electronic crossover masterpieces that derive into the many sub-genres of music via key imprints such as Pets recordings, Multinotes, Mobilee, Last Night On Earth or Stil Vor Talent and his very own Sincopat label, and expressing versatility digging deep into his influences of sounds by delivering heart-stopping, engaging techno on the likes of Octopus, Noir Music, Suara… AFFKT is committed to a life of synthesis and this is what sets himself apart from a comparatively shallow glance at dance music.
        
        Within its versatility is that of working with other musicians. As a result, the fantastic teamwork generated with the vocalist and multi-instrumentalist Sutja Gutierrez. This synergy can be discovered in their just amazing live performances.
        
        Once described as a ‘Son of a Thousand Sounds’ – precisely the title he chose later for his highly acclaimed, even award-winning LP released in 2016. Another remarkable evidence of his talent, creativity and open-mindedness is the ‘The Big Picture’, his latest album to date, a tour de force released on the renowned Mobilee imprint.
        
        AFFKT perfectly manages to thrill us as well as tap into our very core. His music can be enjoyed while dancing, as well as serving as emotional therapy.`

    },
    {
        name: 'Aikon',
        short: 'aikon.html',
        pic: 'aikon.jpeg',
        description: `Ukranian producer AIKON has been making waves with a steady stream of acclaimed releases, dropping records on labels such as Diynamic, Multinotes, Disco Halal, Exploited & Monaberry. His music is a haunting, hypnotic mix of dark electro, breakbeats and melodic techno - with a slight twist of a little italo & acid in there.
        Solomun, Dixon, AME, Pete Tong and Keinemusik are regular supporters of his tracks and are usually the first ones to test his new demos to a large audience. This has led to new song collaborations with Re.You , Pongo and Sobek. Aikon tracks break records top charts beatport and now Aikon is in the top 10 Indie Dance artists beatport in this season.
        Labels : Diynamic , TAU , Multinotes , Renaissance , Monaberry , Disco Halal , Exploited.`
    },
    // {
    //     name: 'Alican',
    //     short: 'alican.html',
    //     pic: 'alican.jpeg',
    //     description: `As one of the key figureheads in Istanbul electronic music culture Alican has been a driving force behind the growth of the city’s scene. Compelled to share his deep passion for electronic music over the past two decades, his unwavering spirit and dedication to nurturing a healthy club culture has led to the formation of a mini empire that includes a successful record label and affiliated events wing; Isolate. As a selector and producer, he has established himself as a highly skilled, intuitive artist who blends emotionally charged atmospheres with deeply hypnotic rhythms and consistently positive energy. A forefather of Turkey’s fertile contemporary electronic music culture, Alican holds a lofty position in his home nation, while maintaining a humble outlook. Almost 20 years since he first became immersed in the scene, he continues to work tirelessly to support the music he loves.

    //     Modest, grounded and deeply committed to electronic music, Alican is one of the most influential figures in the Turkish electronic music scene, though he would never say that himself. An artist who is constantly seeking out pastures new, renewing himself and driven by unassuming goals, Alican never lets his ego outgrow the music. It’s this authenticity - pure, untainted - that has propelled him to his influential status and earned him universal respect. Still driven by the same genuine energy that spurred him on to experiment with electronic sounds as a teen, Alican continues to stay true to his scene, and himself, with heartfelt commitment…`

    // },
    // {
    //     name: 'Aikon',
    //     short: 'aikon.html',
    //     pic: 'aikon.jpeg',
    //     description: `Ukranian producer AIKON has been making waves with a steady stream of acclaimed releases, dropping records on labels such as Diynamic, Multinotes, Disco Halal, Exploited & Monaberry. His music is a haunting, hypnotic mix of dark electro, breakbeats and melodic techno - with a slight twist of a little italo & acid in there.
    //     Solomun, Dixon, AME, Pete Tong and Keinemusik are regular supporters of his tracks and are usually the first ones to test his new demos to a large audience. This has led to new song collaborations with Re.You , Pongo and Sobek. Aikon tracks break records top charts beatport and now Aikon is in the top 10 Indie Dance artists beatport in this season.
    //     Labels : Diynamic , TAU , Multinotes , Renaissance , Monaberry , Disco Halal , Exploited.`
    // },
    // {
    //     name: 'Aldebaran',
    //     short: 'aldebaran.html',
    //     pic: 'aldebaran.jpeg',
    //     description: `Aldebaran is a musical project by Michele Di Martino, roman dj and producer since the last years of 2000's. Came out from the mixture of electronic music and visual arts, it's just the point where imagination and feels are ﬁxed and transformed into music.

    //     Inspired from the Taurus constellation and the wedding beetween black and red shades, Pace & Tempesta is his ﬁrst EP produced for Multinotes.`

    // },
    // {
    //     name: 'Alex Flitsch',
    //     short: 'alexflitsch.html',
    //     pic: 'alexflitsch.jpeg',
    //     description: `Born in the city of Pforzheim in the 70ies, Alex Flitsch was the youngest son of a traditional jeweller family. No one would have thought, that he would one day be travelling the world as a DJ, packed with records, nor that he would be running any successful electronic dance labels! But, that’s the way the cookie crumble. Alex had always been a music fanatic, and when techno hit the scene in the early 90ies, there simply was no way back.

    //     Being an enthusiastic collector of vinyl since the early nineties, he had his first DJ-gig in 1994. In 2005 he founded the well-known Connaisseur Recordings label together with Martin Henkel and his wife Hilary in Frankfurt/Main. Several very successful releases on the label took Alex’s DJ career to another level. He has already rocked places like Tokyo, London, Mexico City, Moscow, Amsterdam, Stockholm, Vienna, Zürich, Bucharest, Offenbach and of course Berlin just to name a few.`

    // },
    // {
    //     name: 'Andy Bros',
    //     short: 'andybros.html',
    //     pic: 'andybros.jpeg',
    //     description: `Andy Bros was born in 1987. Since his earliest youth he has been in touch with music thanks to his family. In 2001 he started DJ'ing, which soon became his passion. Over the years he improved his technique and expanded his musical taste. He was attracted to sounds and melodies deeply rooted in jazz, funky soul and classical music.
    //     His DJ sets are characterized by several genres. He loves to improvise, but also takes care of the technique and his feeling for music.
    //     His strong desire to deepen his musical studies led him to attend a course at the „Spazio Musica“ school in 2009. He became a sound engineer and then began his career as a producer.
    //     In August 2013 the first big success: His track "Love Intro", from his first EP "Groove Family", reached the first place on the Electronica charts of Beatport. In early 2015 his first album "From Daddy's Bag" was released on Overdrive Music.

    //     In July 2015 he released "Vento" on Diynamic Music's VA "Four To The Floor 05". In early 2016 the his first full EP "Essenza EP" was releases on Diynamic with followed by "Artemisia" on FFRR later that year.
    //     In October 2017 he released his second EP on Diynamic "Midnight Love". In December 2018 "Cuore EP" will be released on Chapter 24 Records and will soon be back on Diynamic with the upcoming release of "Dreams EP".

    //     Looking at his latest productions, it's clear that Andy Bros journey has made him a versatile and complete artist who is not afraid to experiment with different genres to give them their touch.`

    // },
    {
        name: 'Cipy',
        short: 'cipy.html',
        pic: 'cipy.jpeg',
        description: `Barcelona based but born in Naples Italy, Cipy has been all around the world giving away vibrations on musical journeys since the early nineties.
        His style continued to evolve over the years under the influence of various genres of electronic music and everything in between.
        
        Once the Barcelona scene took flight, Cipy was expressing himself in the best clubs of city and his sound has been welcomed also in many club around the globe..
        
        His productions following his musical instincts, and find a perfect harmony between analog & digital sounds, irresistable grooves accompanied by entrancing melodies, he has released on some of the most known underground dance labels ! As the co-founder of the project Haiku 575, Cipy is planning to produce more show and present his vision of modern dance music around the globe!`

    },
    {
        name: 'Colossio',
        short: 'colossio.html',
        pic: 'colossio.jpeg',
        description: `Fernando Luna is a Mexican DJ and producer from Monterrey, Nuevo Leon. Some of his influences include styles like Rock, Pop and Mexican Folk, all fused with analog and digital electronic music genres. After the great success of his releases "Moto EP" and "Inocencia EP" with the Mexican label Duro, Colossio has received the support of international DJs including Dixon, Áme and Echonomist to name a few, being "Advertencia" and the remix of Domink Marz to "Inocencia", the most outstanding tracks that were played by these renowned DJs in different parties around the world such as Space Miami, Zamna Tulum and even in a Dixon's streaming presented by Junction 2 by Beatport at the TV Tower in Berlin. He started 2021 making his debut on Toto Chiavetta's label, "Borders of Flight", participating in his annual VA with a collaboration alongside Sobek titled "Tatras" released exclusively on vinyl via Muting The Noise. That same year he also collaborated with Sobek on the release of his EP called "Fragmentado" on the Scatcity label, which includes a remix by Skatman that was released digitally and on vinyl. In 2022 he released an EP with Dominik Marz called "Erate" which will be released on Âme's label, Exit Strategy. He has remixed artists such as Luke Garcia & Th3 Oth3r, Ivory, Did Virgo, among others. He has also performed in some of the best clubs in Mexico including Topaz Deluxe, Bar Americas, Mia, Funk, Crania, Casa Cobra, Bar Oriente, and in European countries like Madrid, Barcelona, Paris, Tel Aviv, Marseille, Lyon, Lisboa, and Berlin, as well as on radio shows such as Kiosk Radio in Belgium and Redlight Radio in Amsterdam. In 2023 I will release an EP with Luke Garcia called "Let Go" which will be released on Engrave LTD with 2 remixes by the italian producer Musumeci. By the end of 2023, 2 releases are expected, the first a song on Innervisions' Secret Weapons and an EP on the Canadian label Microcastle. His versatility, approach and vision on what is the new Mexican sound is a clear example of the new wave of producers in that country that has a high caliber and the potential to become one of the most outstanding artists of his generation.`

    },
    {
        name: 'Dodi ODD1 Palese',
        short: 'dodi.html',
        pic: 'dodi.jpeg',
        description: `Italian Dodi Palese is a helpless vinyl addict: if it sounds good, he buys it. Collecting for most of his life, he soaks up anything he can then uses these records to speak to his audience in whatever way suits. Growing up with a father who ran a radio station is what installed this eclectic ethic in him, and it set him in good stead from the off.

        For many years Dodi was core resident at Casablanca (RIP) in Southern Italy, where he would often spread his musical wings through funk, jazz, soul, afro, disco, house and techno for up to eight hours a night. It was an important learning curve that means he is now able to take a dance floor’s hand and lead it on an unpredictable and rewarding journey through sound that defies the usual categorisations.
        
        In the studio, Dodi focusses on following his instincts and getting lost in the moment: he makes music designed for dancing, and music that veers from afro-funky house to deep and supple minimal techno for the late night hours. It is slick, original stuff with real feeling imbued in the compelling grooves. Dodi also curates his own two labels What Ever Not, together with Dan Mela, and Engrave LTD, with Musumeci. They naturally have a broad outlook that takes in raw four-four, afro, electro and techno, and call upon a mix of artists who are well established as well as hot rising stars.`

    },
    {
        name: 'Enzo Elia',
        short: 'enzoelia.html',
        pic: 'enzoelia.jpeg',
        description: `Enzo Elia has crafted his own style of Djing and producing that has taken him all over Europe as well as to Tokyo and Tel Aviv.

        Emerging almost twenty years ago listening to classic Disco, Chicago House and Detroit Techno, he always delivers an “eclectic “journey through his overflowing vinyl collection. Elia’s chameleon approach also finds release in parallel projects like El Freakadell and Balearic Gabba Sound System.
        
        His music productions can be found on labels Free Range, Golf Channel, Engrave, Compost Records, Black Pearl, Hell Yeah Recordings and last but not least on the mysterious Re-edit label.`

    },
    // {
    //     name: 'Hatelove',
    //     short: 'hatelove.html',
    //     pic: 'hatelove.jpeg',
    //     description: `HATELOVE-The Warsaw-based producer and DJ is one of the most exciting emerging acts right now, whose productions have been taking dance floors by storm. He represents the industrial side of club electronics and his raw, dark, post-metal aesthetics won him a devoted group of supporters among hard techno fans and he's released his debiut EP on SNTS Sacred Court label.`
    // },
    // {
    //     name: 'Human Machine',
    //     short: 'humanmachine.html',
    //     pic: 'humanmachine.jpeg',
    //     description: `Human Machine is a musical project created by four sicilian djs and friends.
    //     Mixing the 4 different musical roots and skills into one new identity, they have a simple rule: to make music in order to dance. After their debut ep ‘Black Mechanism’ on Engrave Ltd they released on Connaisseur, Exit Strategy and Diynamic Music.`
    // },
    // {
    //     name: 'Kate Stein',
    //     short: 'katestein.html',
    //     pic: 'katestein.jpeg',
    //     description: `A nascent purveyor of house and cutting-edge disko in all its forms, DJ/producer and visual artist Kate Stein is grooving her way into the good graces of underground circles everywhere with an experiential sound that's all her own. Australian born, Stein first entered the world of art via set design, meticulously crafting event spaces with an eye for the elegant and the mischievous. Moving to New York in 2012, years of developing her unmistakable style as a spatial designer, her skills with composition, color, and ambiance have coagulated into a raw creative force she manipulates into any form she desires.

    //     A confident performer who has appeared at House of Yes, Mayan Warrior and Cityfox Experience at Brooklyn Mirage, among many other notorious spots, Kate is also carving out her own lane with her productions. Stein channels that force into aggressive rhythms, heavy percussion, and arcane melodies. Releasing her debut Scenic Byway and sophomore Mystic Saddle Ranch EPs in 2021 via Roam Recordings and Playground Records — featuring remixes from the likes of Perel, Zillas On Acid, Balam, and Autarkic — selectors worldwide continue to take notice of Stein's hypnotic pull. July 2022 has her third EP released on TAU, with the Death Stocked EP, her debut with Adana Twins’ label. The EP boasts a bumper selection of reworks from Curses, Zombies in Miami and Leonor.

    //     With audio landscapes meant to inspire joviality and bring about unexpected feelings, this is not the music of pure escapism. This is the music of revelation—opening space within to explore the nebulous reaches of yourself.

    //     In the eyes and ears of Stein, these sounds paint the pictures of New York City's bustling streets and the outlying deserts around Los Angeles, the two metropolises she currently calls home. Within these concrete jungles laid opposite one another, every environment which Stein wishes
    //     to fill with pulsating frequencies exists. Pop-ups. Niche festivals. Places where someone can fully express their inner-child.

    //     With Kate Stein as a guide, you won't just hear that inimitable contrast. Instead, it will appear before your very eyes and envelop your whole body. Keep an eye on this rocket: with a few more releases to come in 2023, her dynamic and fun approach to dance floor soundscapes is in full bloom.`
    // },
    {
        name: 'Just Her',
        short: 'justher.html',
        pic: 'justher.jpeg',
        description: `Enzo Elia has crafted his own style of Djing and producing that has taken him all over Europe as well as to Tokyo and Tel Aviv.

        Emerging almost twenty years ago listening to classic Disco, Chicago House and Detroit Techno, he always delivers an “eclectic “journey through his overflowing vinyl collection. Elia’s chameleon approach also finds release in parallel projects like El Freakadell and Balearic Gabba Sound System.
        
        His music productions can be found on labels Free Range, Golf Channel, Engrave, Compost Records, Black Pearl, Hell Yeah Recordings and last but not least on the mysterious Re-edit label.`

    },
    {
        name: 'Mala Ika',
        short: 'malaika.html',
        pic: 'malaika.jpeg',
        description: `Born and Raised in Guadeloupe, FWI, Mala Ika is a French DJ and Producer. Earlier her passion for digging electronic musique helps her become one of the founders of the Media Beweird and Label Weirdos Records. Known for being workaholic and creative, she provides a spicy and original music. After few years and a lockdown
        intense, She came back with a new Indie dance style and vision.`
    },
    {
        name: 'Musumeci',
        short: 'musumeci.html',
        pic: 'musumeci.jpeg',
        description: `Musumeci is a musical project by Mauro Di Martino, sicilian dj and producer since late 80s. In the last 10 Years with his over 200 productions between original tracks and remixes he appeared on labels like Bedrock, Connaisseur, Compost Black Label, Correspondant, Diynamic Music, Future Disco, Innervisions, MoBlack, Kompakt, Permanent Vacation, Toy Tonics, Watergate and many others, did mixtapes for Cicrocolo, Transitions, BBC Hot Mix etc. Musumeci is also owner of Engrave Ltd, Multinotes Recordings & Buttress Records. `
    },
    // {
    //     name: 'Nico Morano',
    //     short: 'nicomorano.html',
    //     pic: 'nicomorano.jpeg',
    //     description: `After more than two decades of gigs, Nico Morano’s energy has captured the hearts of melodic dance enthusiasts worldwide. From his own Ontourage Music label and events to his impressive stage hostings at Tomorrowland and Paradise City Festival, Nico's signature sound embodies the colorful flair that today's club scene often lacks. Think: harmonic melodies with an organic and progressive spirit often infused with the vibrant tints of italo or deep house. Happy vibes all over the place!`
    // },
    // {
    //     name: 'Olderic',
    //     short: 'olderic.html',
    //     pic: 'olderic.jpeg',
    //     description: `Enrico De Vecchi, better known as Olderic, is a Venice based dj, producer, parties organizer and vinyls collector since early 2000s.
    //     The sum of events have conducted his career, between 2009 and 2012, inside a thriving tech groovy age, playing all around Europe and releasing on some of the most influential labels of that period, like Area Remote, Terminal M and Saved.
    //     His first love, the one for melodies and armonies, rised up at the end of that cycle, coming stronger than ever and guiding him to a new brighting music scene, giving him the force to release music on labels like Connaisseur, Compost, Siamese, Get Physical, Moodmusic, Embassy of Music, Best Works and Innervisions, as Olderic and as Stereocalypse, the duo project created together with the studio pioneer Andrea Doria.
    //     Co-founder of Multinotes together with Lehar and Musumeci`
    // },
    {
        name: 'Phunkadelica',
        short: 'phunkadelica.html',
        pic: 'phunkadelica.jpeg',
        description: `A sparkling, multi-flavoured injection of waves, dimensions and grooves developed to increase intergalactic powers and abilities, thanks to a mix of timeless beats, spicy snares, tec-no-logical fills, talking hats, hyperbolic arpeggiators, cosmic smokey clouds, synthetic sinusoidal acidifying.
        It will be a shuttle to draw all your routes across the cosmos.

        Universe is elusive, keep it stronger!`
    },
    {
        name: 'Private Press',
        short: 'privatepress.html',
        pic: 'privatepress.jpeg',
        description: `The Warsaw based duo Private Press focusses on producing high energy and dubbed out techno cuts. They delivered multiple EP’s and singles for labels such as Rekids, Indigo Aare, Hardgroove and Of Paradise. Their latest material was featured in Cyberpunk 2077 game and Netflix anime series Edgerunners.`
    },
    {
        name: 'Way Of Thinking',
        short: 'wayofthinking.html',
        pic: 'wayofthinking.jpeg',
        description: `Way of Thinking is the project of Álvaro Mesa, one of the most relevant and promising figures in the south of Spain who, after 16 years with another nickname, decided to head up this project. In just two year she has been in the best clubs inSpain, Mexico and cities such Berlin, London, Miami, Los Angeles or New York among many others. His qualities combine perfectly behind the mixer and in studio work. His soul and identity are the enveloping melodies and atmospheres without forgetting the vocal with resounding drums, always betting on the different, the elegant and the unique, always dynamizing with freshness. Without typecasting, he shows in each of his sets unreleased material where he tries to tell a story wherever he goes.After being this past year very focused on the studio, as long as the gigs allowed him, he has signed several releases in labels like Multinotes, MoBlack or Get Physical.At the same time he is Co-Owner atSun and Snow Weekend, in charge of elaborating the musical history of the event celebrated every year in the mountains of Sierra Nevada in Spain every April.`
    },

];



for (let artist of artists) {

    const artistsSection = document.querySelector('.artists-section');

    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    const artistImg = document.createElement('section');
    artistImg.classList.add('artist-img');
    artistImg.style.backgroundImage = `url(./assets/artists/${artist.pic})`;
    artistCard.appendChild(artistImg);

    const artistInfo = document.createElement('section');
    artistInfo.classList.add('artist-info');

    const h1 = document.createElement('h1');
    h1.textContent = artist.name;
    artistInfo.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = artist.description;
    artistInfo.appendChild(p);

    const infoBottom = document.createElement('section');
    infoBottom.classList.add('info-bottom');

    const a = document.createElement('a');
    a.classList.add('see-more');
    a.textContent = 'see more';
    a.href = `./artists/${artist.short}`;
    infoBottom.appendChild(a);


    artistInfo.appendChild(infoBottom);

    artistCard.appendChild(artistInfo);

    artistsSection.appendChild(artistCard);
}