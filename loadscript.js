function makedoc() {
        var fromhtml = document.getElementById("seedInput").value;
        if (fromhtml == 100000000000000) {
        var seed = Math.random()*900000000000000 + 100000000000000;
        } else {
            seed = fromhtml;
        }
        seed = seed - seed%1;
        var first = (seed%10 - seed%1)/1; //page type
        var second = (seed %100 - seed%10)/10; //number of sections
        var third = (seed %1000 - seed%100)/100; //number of columns
        var fourth = (seed %10000 - seed%1000)/1000; //      |type and number of rows and height
        var fifth = (seed %100000 - seed%10000)/10000; //    |          |
        var sixth = (seed %1000000 - seed%100000)/100000; // |          v
        var seventh = (seed %10000000 - seed%1000000)/1000000; //
        var eighth = (seed %100000000 - seed%10000000)/10000000; //
        var ninth = (seed %1000000000 - seed%100000000)/100000000; // margin %
        var tenth = (seed %10000000000 - seed%1000000000)/1000000000; //
        var eleventh = (seed %100000000000 - seed%10000000000)/10000000000; //
        var twelfth = (seed %1000000000000 - seed%100000000000)/100000000000; //
        var thirteenth = (seed %10000000000000 - seed%1000000000000)/1000000000000; //
        var fourteenth = (seed %100000000000000 - seed%10000000000000)/10000000000000; //
        var fifteenth = (seed %1000000000000000 - seed%100000000000000)/100000000000000; //

        var rownums = 0;
        var fourandfive = (seed %100000 - seed%1000)/1000;
        if (fourandfive /*<= 10*/ >= 0) {
            rownums = 1;
        } /*else if (11 <= fourandfive && fourandfive <= 25) {
            rownums = 2;
        } else if (26 <= fourandfive && fourandfive <= 40) {
            rownums = 3;
        } else if (41 <= fourandfive && fourandfive <= 65) {
            rownums = 4;
        } else if (66 <= fourandfive && fourandfive <= 75) {
            rownums = 5;
        } else if (76 <= fourandfive && fourandfive <= 85) {
            rownums = 6;
        } else if (86 <= fourandfive && fourandfive <= 90) {
            rownums = 8;
        } else if (91 <= fourandfive && fourandfive <= 95) {
            rownums = 9;
        } else if (96 <= fourandfive) {
            rownums = 10;
        } */

        var row1, row2, row3, row4, row5, row6, row7, row8, row9, row10;
        row1 = (first*100 + second*10 + third);
        row2 = (fourth*100 + fifth*10 + sixth);
        row3 = (seventh*100 + eighth*10 + ninth);
        row4 = (tenth*100 + eleventh*10 + twelfth);
        row5 = (thirteenth*100 + fourteenth*10 + fifteenth);
        row6 = (first*100 + fourth*10 + seventh);
        row7 = (tenth*100 + thirteenth*10 + second);
        row8 = (fifth*100 + eighth*10 + eleventh);
        row9 = (fourteenth*100 + third*10 + sixth);
        row10 = (ninth*100 + twelfth*10 + fifteenth);

        var fillertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Facilisi nullam vehicula ipsum a arcu cursus. In mollis nunc sed id semper risus in. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Vel risus commodo viverra maecenas accumsan lacus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tellus at urna condimentum mattis pellentesque id. Enim neque volutpat ac tincidunt vitae semper quis. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sit amet nisl purus in mollis nunc. Consequat semper viverra nam libero. Pretium viverra suspendisse potenti nullam. Congue mauris rhoncus aenean vel elit scelerisque mauris. Ac turpis egestas integer eget aliquet. Pretium vulputate sapien nec sagittis aliquam. Eros donec ac odio tempor orci dapibus. Dui nunc mattis enim ut tellus. Quam vulputate dignissim suspendisse in est ante in. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eu augue ut lectus arcu. Orci eu lobortis elementum nibh tellus molestie nunc non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Egestas dui id ornare arcu odio ut sem nulla pharetra. Mauris a diam maecenas sed enim ut sem viverra aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Tortor id aliquet lectus proin nibh nisl condimentum id. Vel pretium lectus quam id. Nisi vitae suscipit tellus mauris a diam maecenas sed. Volutpat blandit aliquam etiam erat velit scelerisque in. A diam maecenas sed enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris augue neque. Ullamcorper sit amet risus nullam eget felis. Ornare aenean euismod elementum nisi quis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Ornare quam viverra orci sagittis eu. Eget sit amet tellus cras adipiscing enim. Etiam sit amet nisl purus in mollis nunc sed. Elementum pulvinar etiam non quam lacus suspendisse. Etiam erat velit scelerisque in dictum non consectetur a. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultricies mi eget mauris pharetra et. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sagittis vitae et leo duis ut diam. Pellentesque pulvinar pellentesque habitant morbi. Euismod elementum nisi quis eleifend quam adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus. Eget aliquet nibh praesent tristique magna. Elementum tempus egestas sed sed risus pretium quam vulputate. Nunc sed augue lacus viverra vitae congue. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam ultrices sagittis orci a. Blandit libero volutpat sed cras ornare. Neque viverra justo nec ultrices dui sapien eget mi proin. Quam elementum pulvinar etiam non. Sagittis nisl rhoncus mattis rhoncus. Leo urna molestie at elementum eu facilisis. Lorem sed risus ultricies tristique nulla. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sodales ut etiam sit amet nisl purus in mollis. Laoreet sit amet cursus sit amet dictum sit amet justo. Malesuada proin libero nunc consequat interdum. Est lorem ipsum dolor sit. Iaculis nunc sed augue lacus viverra vitae. Blandit libero volutpat sed cras ornare. Lacus sed viverra tellus in hac habitasse platea. At in tellus integer feugiat scelerisque. Pulvinar mattis nunc sed blandit libero volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Facilisi nullam vehicula ipsum a arcu cursus. In mollis nunc sed id semper risus in. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Vel risus commodo viverra maecenas accumsan lacus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tellus at urna condimentum mattis pellentesque id. Enim neque volutpat ac tincidunt vitae semper quis. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sit amet nisl purus in mollis nunc. Consequat semper viverra nam libero. Pretium viverra suspendisse potenti nullam. Congue mauris rhoncus aenean vel elit scelerisque mauris. Ac turpis egestas integer eget aliquet. Pretium vulputate sapien nec sagittis aliquam. Eros donec ac odio tempor orci dapibus. Dui nunc mattis enim ut tellus. Quam vulputate dignissim suspendisse in est ante in. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eu augue ut lectus arcu. Orci eu lobortis elementum nibh tellus molestie nunc non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Egestas dui id ornare arcu odio ut sem nulla pharetra. Mauris a diam maecenas sed enim ut sem viverra aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Tortor id aliquet lectus proin nibh nisl condimentum id. Vel pretium lectus quam id. Nisi vitae suscipit tellus mauris a diam maecenas sed. Volutpat blandit aliquam etiam erat velit scelerisque in. A diam maecenas sed enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris augue neque. Ullamcorper sit amet risus nullam eget felis. Ornare aenean euismod elementum nisi quis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Ornare quam viverra orci sagittis eu. Eget sit amet tellus cras adipiscing enim. Etiam sit amet nisl purus in mollis nunc sed. Elementum pulvinar etiam non quam lacus suspendisse. Etiam erat velit scelerisque in dictum non consectetur a. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultricies mi eget mauris pharetra et. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sagittis vitae et leo duis ut diam. Pellentesque pulvinar pellentesque habitant morbi. Euismod elementum nisi quis eleifend quam adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus. Eget aliquet nibh praesent tristique magna. Elementum tempus egestas sed sed risus pretium quam vulputate. Nunc sed augue lacus viverra vitae congue. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam ultrices sagittis orci a. Blandit libero volutpat sed cras ornare. Neque viverra justo nec ultrices dui sapien eget mi proin. Quam elementum pulvinar etiam non. Sagittis nisl rhoncus mattis rhoncus. Leo urna molestie at elementum eu facilisis. Lorem sed risus ultricies tristique nulla. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sodales ut etiam sit amet nisl purus in mollis. Laoreet sit amet cursus sit amet dictum sit amet justo. Malesuada proin libero nunc consequat interdum. Est lorem ipsum dolor sit. Iaculis nunc sed augue lacus viverra vitae. Blandit libero volutpat sed cras ornare. Lacus sed viverra tellus in hac habitasse platea. At in tellus integer feugiat scelerisque. Pulvinar mattis nunc sed blandit libero volutpat sed.";

        function loadUnits1(p, c) {
                    if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //grid, completely homogenous
                    var loremcounter = 300*p;
                    var col;
                    for (col = 0; col < c; col++) { //insert unit to put in grid below
                        var unit = document.createElement("p");
                        unit.style.width = wth;
                        unit.style.height = "200px";
                        unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                        unit.style.margin = "0px";
                        document.getElementById("coldivone" + col).appendChild(unit);
                    }
        }
        function loadUnits2(p, c){
                    if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //grid, patterned, alternating by every other row with two elements
                    var loremcounter = 300*p;
                    var col;
                    for (col = 0; col < c; col++) {
                        if (p%2 == 0) {
                            var unit = document.createElement("p");
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                            unit.style.margin = "0px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        } else {
                            var unit = document.createElement("img");
                            var iwid = "200";
                            var ihigh = "200";
                            var pic = Math.random()*300;
                            pic = (pic - pic%1);
                            var att = document.createAttribute("src");
                            var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                            att.value = picval;
                            unit.setAttributeNode(att);
                            unit.style.width = wth;
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                    }
        }
        function loadUnits3(p, c) {
            if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //grid, patterned, alternating every third row with three elements
                    var loremcounter = 300*p;
                    var col;
                    for (col = 0; col < c; col++) {
                        if (p%3 == 0) {
                            var unit = document.createElement("p");
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                            unit.style.margin = "0px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        } else if (p%2 == 0) {
                            var unit = document.createElement("img");
                            var iwid = "200";
                            var ihigh = "200";
                            var pic = Math.random()*300;
                            pic = (pic - pic%1);
                            var att = document.createAttribute("src");
                            var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                            att.value = picval;
                            unit.setAttributeNode(att);
                            unit.style.width = wth;
                            document.getElementById("coldivone" + col).appendChild(unit);
                        } else {
                            var unit = document.createElement("div");
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            unit.style.backgroundColor = "brown";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                    }
        }
        function loadUnits4(p, c) {
            if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //grid, homogeneous 2 columns
                    var loremcounter = 300*p;
                    var col;
                    for (col = 0; col < c; col++) {
                        if (col == 0) {
                            var unit = document.createElement("img");
                            var iwid = "200";
                            var ihigh = "200";
                            var pic = Math.random()*300;
                            pic = (pic - pic%1);
                            var att = document.createAttribute("src");
                            var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                            att.value = picval;
                            unit.setAttributeNode(att);
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                        else {
                            var unit = document.createElement("p");
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                            unit.style.margin = "0px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                    }
        }
        function loadUnits5(p, c) {
            if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //varying heights, 2:1
                    var loremcounter = 300*p;
                    var col;
                    for (col = 0; col < c; col++) {
                        if (col == 0) {
                            var unit = document.createElement("p");
                            unit.style.width = wth;
                            unit.style.height = "100px";
                            unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                            unit.style.margin = "0px";
                            document.getElementById("coldivone" + col).appendChild(unit);

                            var unit = document.createElement("div");
                            unit.style.width = wth;
                            unit.style.height = "100px";
                            unit.style.backgroundColor = "purple";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                        else {
                            var unit = document.createElement("img");
                            var iwid = "200";
                            var ihigh = "200";
                            var pic = Math.random()*300;
                            pic = (pic - pic%1);
                            var att = document.createAttribute("src");
                            var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                            att.value = picval;
                            unit.setAttributeNode(att);
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                    }
        }
        function loadUnits6(p, c) {
            if (c == 3) {
                        var wth = "23vw";
                    } else if (c == 2) {
                        var wth = "37vw";
                    }
                    //varying heights, 3:1
                    for (col = 0; col < c; col++) {
                        if (col == 0) {
                            var unit = document.createElement("p");
                            unit.style.width = wth;
                            unit.style.height = "100px";
                            unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                            unit.style.margin = "0px";
                            document.getElementById("coldivone" + col).appendChild(unit);

                            var unit = document.createElement("div");
                            unit.style.width = wth;
                            unit.style.height = "100px";
                            unit.style.backgroundColor = "purple";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                        else {
                            var unit = document.createElement("img");
                            var iwid = "200";
                            var ihigh = "200";
                            var pic = Math.random()*300;
                            pic = (pic - pic%1);
                            var att = document.createAttribute("src");
                            var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                            att.value = picval;
                            unit.setAttributeNode(att);
                            unit.style.width = wth;
                            unit.style.height = "200px";
                            document.getElementById("coldivone" + col).appendChild(unit);
                        }
                    }
        }

        var margin;
        if (first > 1){
        if (ninth <= 1) {
            document.body.style.paddingLeft = "10vw";
            document.body.style.paddingRight = "10vw";
            margin = 20;
        } else if (2 <= ninth && ninth <= 3) {
            document.body.style.paddingLeft = "7.5vw";
            document.body.style.paddingRight = "7.5vw";
            margin = 15;
        } else if (4 <= ninth && ninth <= 5) {
            document.body.style.paddingLeft = "5vw";
            document.body.style.paddingRight = "5vw";
            margin = 10;
        } else if (6 <= ninth && ninth <= 7) {
            document.body.style.paddingLeft = "2.5vw";
            document.body.style.paddingRight = "2.5vw";
            margin = 5;
        }
        }

        if (first > 0) { //Nav Tree
        var navcont = document.createElement("div");
            navcont.style.height = "90px";
            navcont.style.width = (100 - margin) + "vw";
            navcont.style.display = "flex";
            navcont.style.justifyContent = "space-around";
            navcont.style.alignItems = "center";
            navcont.setAttribute("id", "navdiv");

            document.body.appendChild(navcont);

            var logo = document.createElement("img");
            var logatt = document.createAttribute("src");
            logatt.value = "Assets/log.png";
            logo.setAttributeNode(logatt);
            document.getElementById("navdiv").appendChild(logo);

            var i;
            for (i = 0; i < 4; i++) {
                var link = document.createElement("a");
                link.innerHTML = "link";
                link.setAttribute("id", "topage" + i);
                link.setAttribute("href", "testpage1.html");
                document.getElementById("navdiv").appendChild(link);
            }
        }

        var snum = document.createElement("p");
        snum.innerHTML = seed;
        document.body.appendChild(snum);

        if (first >= 8) { //Header Tree
            var title = document.createElement("h1");
            var tag = document.createElement("p");
            title.innerHTML = "First option";
            tag.innerHTML = "An interesting bit of text describing the website.";

            document.body.appendChild(title);
            document.body.appendChild(tag); //No img above fold keep title
        } else {
            if (first <= 1) { //image takes up whole page
                if (first == 0){
                    var iwid = parseInt((200 + Math.random()*800), 10);
                    var ihigh = parseInt((200 + Math.random()*800), 10);
                    var pic = parseInt(1*(Math.random()*1000), 10);
                    var att = document.createAttribute("src");
                    var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                    att.value = picval;

                    var title = document.createElement("h1");
                    var tag = document.createElement("p");
                    title.innerHTML = "Second option";
                    tag.innerHTML = "An interesting bit of text describing the website.";

                    document.body.style.backgroundImage = "url('" + picval + "')";

                    document.body.appendChild(title);
                    document.body.appendChild(tag);//full splash
                } else {
                    var splashcont = document.createElement("div");
                    splashcont.style.height = "100vh";
                    splashcont.style.width = (100 - margin) + "vw";

                    var iwid = parseInt((200 + Math.random()*800), 10);
                    var ihigh = parseInt((200 + Math.random()*800), 10);
                    var pic = parseInt(1*(Math.random()*1000), 10);
                    var att = document.createAttribute("src");
                    var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                    att.value = picval;

                    var br = document.createElement("br");

                    var title = document.createElement("h1");
                    var tag = document.createElement("p");
                    title.innerHTML = "Third option";
                    tag.innerHTML = "An interesting bit of text describing the website.";

                    document.body.appendChild(splashcont)
                    splashcont.style.backgroundImage = "url('" + picval + "')";
                    document.body.appendChild(br);
                    document.body.appendChild(title);
                    document.body.appendChild(tag);//scrollable
                }
            } else if (2 <= first && first <= 4) {
                var splashcont = document.createElement("div");
                splashcont.style.height = "40vh";
                splashcont.style.width = (100 - margin) + "vw";
                splashcont.setAttribute("id", "headdiv");

                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Fourth option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(splashcont)
                splashcont.style.backgroundImage = "url('" + picval + "')";
                document.getElementById("headdiv").appendChild(title);
                document.getElementById("headdiv").appendChild(tag);//Header with text
            } else if (5 <= first && first <= 6) {
                var splashcont = document.createElement("div");
                splashcont.style.height = "40vh";
                splashcont.style.width = (100 - margin) + "vw";
                splashcont.setAttribute("id", "headdiv");

                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Fifth option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(splashcont)
                splashcont.style.backgroundImage = "url('" + picval + "')";
                document.body.appendChild(title);
                document.body.appendChild(tag);//Header with text
            } else {
                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.style.width = "50vw";
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Last option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(title);
                document.body.appendChild(tag);
                document.body.appendChild(img); //Half image half title
            }
        }

        if (first != 0) { //content tree
            var contentcont = document.createElement("div");
            contentcont.style.width = "100%";
            contentcont.style.display = "flex";
            contentcont.style.flexDirection = "column";
            contentcont.style.justifyContent = "space-around";
            contentcont.setAttribute("id", "contentcont");

            document.body.appendChild(contentcont);

            var makecol;
            var rnum = 0;
            for (makecol = 0; makecol < rownums; makecol++) {
                var rowdiv = document.createElement("div");
                rowdiv.style.width = "100%";
                rowdiv.style.marginTop = "0px";
                rowdiv.style.marginLeft = "0px";
                rowdiv.style.marginRight = "0px";
                rowdiv.style.marginBottom = "50px";
                rowdiv.style.display = "flex";
                rowdiv.style.flexdirection = "row";
                rowdiv.style.justifyContent = "space-around";
                rowdiv.setAttribute("id", "rowdiv" + makecol);
                document.getElementById("contentcont").appendChild(rowdiv);

                if (makecol == 0) {
                    rnum = "one";
                } else if (makecol == 1) {
                    rnum = "two";
                } else if (makecol == 2) {
                    rnum = "three";
                } else if (makecol == 3) {
                    rnum = "four";
                } else if (makecol == 4) {
                    rnum = "five";
                } else if (makecol == 5) {
                    rnum = "six";
                } else if (makecol == 6) {
                    rnum = "seven";
                } else if (makecol == 7) {
                    rnum = "eight";
                } else if (makecol == 8) {
                    rnum = "nine";
                } else if (makecol == 9) {
                    rnum = "ten";
                }

                if (third >= 8) {//three columns
                    var coldiv = document.createElement("div");
                    coldiv.style.width = "25vw";
                    coldiv.style.height = "auto";
                    coldiv.style.backgroundColor = "blue";
                    coldiv.style.display = "flex";
                    coldiv.style.flexDirection = "column";
                    coldiv.style.alignItems = "center";
                    coldiv.setAttribute("id", "coldiv" + rnum + "0");
                    document.getElementById("rowdiv" + makecol).appendChild(coldiv);

                    var coldiv = document.createElement("div");
                    coldiv.style.width = "25vw";
                    coldiv.style.height = "auto";
                    coldiv.style.backgroundColor = "blue";
                    coldiv.style.display = "flex";
                    coldiv.style.flexDirection = "column";
                    coldiv.style.alignItems = "center";
                    coldiv.setAttribute("id", "coldiv" + rnum + "1");
                    document.getElementById("rowdiv" + makecol).appendChild(coldiv);

                    var coldiv = document.createElement("div");
                    coldiv.style.width = "25vw";
                    coldiv.style.height = "auto";
                    coldiv.style.backgroundColor = "blue";
                    coldiv.style.display = "flex";
                    coldiv.style.flexDirection = "column";
                    coldiv.style.alignItems = "center";
                    coldiv.setAttribute("id", "coldiv" + rnum + "2");
                    document.getElementById("rowdiv" + makecol).appendChild(coldiv);
                    var c = 3
                    var p;
                    for (p = 0; p < 4; p++) {
                        loadUnits1(p, c);
                    }
                    c = 3;
                    for (p = 0; p < 8; p++) {
                        loadUnits2(p, c);
                    }
                    c = 3;
                    for (p = 0; p < 9; p++) {
                        loadUnits3(p, c);
                    }
                    c = 3;
                    for (p = 0; p < 4; p++) {
                        loadUnits4(p, c);
                    }
                    c = 3;
                    for (p = 0; p < 4; p++) {
                        loadUnits5(p, c);
                    }
                } else if (5 <= third && third <= 7) {
                    var coldiv = document.createElement("div");
                    coldiv.style.width = "38vw";
                    coldiv.style.height = "auto";
                    coldiv.style.backgroundColor = "blue";
                    coldiv.style.display = "flex";
                    coldiv.style.flexDirection = "column";
                    coldiv.style.alignItems = "center";
                    coldiv.setAttribute("id", "coldiv" + rnum + "0");
                    document.getElementById("rowdiv" + makecol).appendChild(coldiv);

                    var coldiv = document.createElement("div");
                    coldiv.style.width = "38vw";
                    coldiv.style.height = "auto";
                    coldiv.style.backgroundColor = "blue";
                    coldiv.style.display = "flex";
                    coldiv.style.flexDirection = "column";
                    coldiv.style.alignItems = "center";
                    coldiv.setAttribute("id", "coldiv" + rnum + "1");
                    document.getElementById("rowdiv" + makecol).appendChild(coldiv);
                    var p;
                    for (p = 0; p < 4; p++) {
                        loadUnits1(p, c);
                    }
                    c = 2;
                    for (p = 0; p < 8; p++) {
                        loadUnits2(p, c);
                    }
                    c = 2;
                    for (p = 0; p < 9; p++) {
                        loadUnits3(p, c);
                    }
                    c = 2;
                    for (p = 0; p < 4; p++) {
                        loadUnits4(p, c);
                    }
                    c = 2;
                    for (p = 0; p < 4; p++) {
                        loadUnits5(p, c);
                    }
                }
            }
        }
}

function destroydoc() {
            var allElements = document.getElementsByTagName("*");
            var allIds = [];
            for (var i = 0, n = allElements.length; i < n; ++i) {
            var el = allElements[i];
            if (el.id) { allIds.push(el.id); }
            }

            for (var h = 0; h < allIds.length; h++){
                var check = !(document.getElementById(allIds[h]).getAttribute("class") == "save");
                if ( check ) {
                    document.getElementById(allIds[h]).style.display = "none";
                }
            }
        }
