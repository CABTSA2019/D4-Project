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
        var fifth = (seed %100000 - seed%10000)/10000; //    |
        var sixth = (seed %1000000 - seed%100000)/100000; //
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
        if (fourandfive <= 10) {
            rownums = 1;
        } else if (11 <= fourandfive && fourandfive <= 25) {
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
        }

        var row1, row2, row3, row4, row5, row6, row7, row8, row9, row10;
        row1 = (ninth*100 + twelfth*10 + fifteenth);
        row2 = (seventh*100 + second*10 + eleventh);
        row3 = (fifteenth*100 + eighth*10 + ninth);
        row4 = (tenth*100 + eleventh*10 + twelfth);
        row5 = (thirteenth*100 + fourteenth*10 + fifteenth);
        row6 = (eighth*100 + fourth*10 + seventh);
        row7 = (eleventh*100 + thirteenth*10 + second);
        row8 = (twelfth*100 + eighth*10 + eleventh);
        row9 = (fourteenth*100 + third*10 + sixth);
        row10 = (sixth*100 + twelfth*10 + fifteenth);

        var fillertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Facilisi nullam vehicula ipsum a arcu cursus. In mollis nunc sed id semper risus in. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Vel risus commodo viverra maecenas accumsan lacus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tellus at urna condimentum mattis pellentesque id. Enim neque volutpat ac tincidunt vitae semper quis. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sit amet nisl purus in mollis nunc. Consequat semper viverra nam libero. Pretium viverra suspendisse potenti nullam. Congue mauris rhoncus aenean vel elit scelerisque mauris. Ac turpis egestas integer eget aliquet. Pretium vulputate sapien nec sagittis aliquam. Eros donec ac odio tempor orci dapibus. Dui nunc mattis enim ut tellus. Quam vulputate dignissim suspendisse in est ante in. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eu augue ut lectus arcu. Orci eu lobortis elementum nibh tellus molestie nunc non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Egestas dui id ornare arcu odio ut sem nulla pharetra. Mauris a diam maecenas sed enim ut sem viverra aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Tortor id aliquet lectus proin nibh nisl condimentum id. Vel pretium lectus quam id. Nisi vitae suscipit tellus mauris a diam maecenas sed. Volutpat blandit aliquam etiam erat velit scelerisque in. A diam maecenas sed enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris augue neque. Ullamcorper sit amet risus nullam eget felis. Ornare aenean euismod elementum nisi quis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Ornare quam viverra orci sagittis eu. Eget sit amet tellus cras adipiscing enim. Etiam sit amet nisl purus in mollis nunc sed. Elementum pulvinar etiam non quam lacus suspendisse. Etiam erat velit scelerisque in dictum non consectetur a. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultricies mi eget mauris pharetra et. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sagittis vitae et leo duis ut diam. Pellentesque pulvinar pellentesque habitant morbi. Euismod elementum nisi quis eleifend quam adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus. Eget aliquet nibh praesent tristique magna. Elementum tempus egestas sed sed risus pretium quam vulputate. Nunc sed augue lacus viverra vitae congue. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam ultrices sagittis orci a. Blandit libero volutpat sed cras ornare. Neque viverra justo nec ultrices dui sapien eget mi proin. Quam elementum pulvinar etiam non. Sagittis nisl rhoncus mattis rhoncus. Leo urna molestie at elementum eu facilisis. Lorem sed risus ultricies tristique nulla. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sodales ut etiam sit amet nisl purus in mollis. Laoreet sit amet cursus sit amet dictum sit amet justo. Malesuada proin libero nunc consequat interdum. Est lorem ipsum dolor sit. Iaculis nunc sed augue lacus viverra vitae. Blandit libero volutpat sed cras ornare. Lacus sed viverra tellus in hac habitasse platea. At in tellus integer feugiat scelerisque. Pulvinar mattis nunc sed blandit libero volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Facilisi nullam vehicula ipsum a arcu cursus. In mollis nunc sed id semper risus in. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Vel risus commodo viverra maecenas accumsan lacus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tellus at urna condimentum mattis pellentesque id. Enim neque volutpat ac tincidunt vitae semper quis. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sit amet nisl purus in mollis nunc. Consequat semper viverra nam libero. Pretium viverra suspendisse potenti nullam. Congue mauris rhoncus aenean vel elit scelerisque mauris. Ac turpis egestas integer eget aliquet. Pretium vulputate sapien nec sagittis aliquam. Eros donec ac odio tempor orci dapibus. Dui nunc mattis enim ut tellus. Quam vulputate dignissim suspendisse in est ante in. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eu augue ut lectus arcu. Orci eu lobortis elementum nibh tellus molestie nunc non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Egestas dui id ornare arcu odio ut sem nulla pharetra. Mauris a diam maecenas sed enim ut sem viverra aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Tortor id aliquet lectus proin nibh nisl condimentum id. Vel pretium lectus quam id. Nisi vitae suscipit tellus mauris a diam maecenas sed. Volutpat blandit aliquam etiam erat velit scelerisque in. A diam maecenas sed enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris augue neque. Ullamcorper sit amet risus nullam eget felis. Ornare aenean euismod elementum nisi quis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Ornare quam viverra orci sagittis eu. Eget sit amet tellus cras adipiscing enim. Etiam sit amet nisl purus in mollis nunc sed. Elementum pulvinar etiam non quam lacus suspendisse. Etiam erat velit scelerisque in dictum non consectetur a. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultricies mi eget mauris pharetra et. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sagittis vitae et leo duis ut diam. Pellentesque pulvinar pellentesque habitant morbi. Euismod elementum nisi quis eleifend quam adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus. Eget aliquet nibh praesent tristique magna. Elementum tempus egestas sed sed risus pretium quam vulputate. Nunc sed augue lacus viverra vitae congue. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam ultrices sagittis orci a. Blandit libero volutpat sed cras ornare. Neque viverra justo nec ultrices dui sapien eget mi proin. Quam elementum pulvinar etiam non. Sagittis nisl rhoncus mattis rhoncus. Leo urna molestie at elementum eu facilisis. Lorem sed risus ultricies tristique nulla. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sodales ut etiam sit amet nisl purus in mollis. Laoreet sit amet cursus sit amet dictum sit amet justo. Malesuada proin libero nunc consequat interdum. Est lorem ipsum dolor sit. Iaculis nunc sed augue lacus viverra vitae. Blandit libero volutpat sed cras ornare. Lacus sed viverra tellus in hac habitasse platea. At in tellus integer feugiat scelerisque. Pulvinar mattis nunc sed blandit libero volutpat sed.";

        var alternate = true;
        var checkifalternate = true;

        function loadUnits(p, c, r) { //p is number of mods per row, c is number of columns, r is row number
            var isStandard = true;
            var rseed;
            if (r == 0) {
                rseed = row1;
            } else if (r == 1) {
                rseed = row2;
            } else if (r == 2) {
                rseed = row3;
            } else if (r == 3) {
                rseed = row4;
            } else if (r == 4) {
                rseed = row5;
            } else if (r == 5) {
                rseed = row6;
            } else if (r == 6) {
                rseed = row7;
            } else if (r == 7) {
                rseed = row8;
            } else if (r == 8) {
                rseed = row9;
            } else if (r == 9) {
                rseed = row10;
            }

            var rnum;
            if (r == 0) {
                rnum = "one";
            } else if (r == 1) {
                rnum = "two";
            } else if (r == 2) {
                rnum = "three";
            } else if (r == 3) {
                rnum = "four";
            } else if (r == 4) {
                rnum = "five";
            } else if (r == 5) {
                rnum = "six";
            } else if (r == 6) {
                rnum = "seven";
            } else if (r == 7) {
                rnum = "eight";
            } else if (r == 8) {
                rnum = "nine";
            } else if (r == 9) {
                rnum = "ten";
            }

            if (c != 1) { //non one row results
                if (c == 3) { //two columns
                    var wth = "23vw";
                    if (rseed < 750 && rseed > 249 && isStandard) { //normal results
                        //module tree
                        if (rseed < 270 && rseed > 249) { //test: 100500200005801
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //all text, ALIGNED
                                var unit = document.createElement("p");
                                unit.style.width = wth;
                                unit.style.height = "200px";
                                unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                unit.style.margin = "0px";
                                unit.style.overflowY = "hidden";
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);
                            }
                        } else if (rseed < 310 && rseed > 269) {
                            var arrange = 0; //test: 100700200005801
                            //words in first column, twice as common as next two options
                            if (rseed < 310 && rseed > 299) { //test: 100000300005801
                                arrange = 1; //words in second column
                            } else if (rseed < 300 && rseed > 289) { //test: 100900200005801
                                arrange = 2; //words in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //pics in two columns and text in one, ALIGNED
                                if (col == arrange) {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 325 && rseed > 309) {
                            var arrange = 0; //test: 400100300005801
                            //pics in first column
                            if (rseed < 325 && rseed > 319) { //test: 100200300005801
                                arrange = 1; //pics in second column
                            } else if (rseed < 320 && rseed > 314) { //test: 500100300005801
                                arrange = 2; //pics in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //text in two columns and pics in one, ALIGNED
                                if (col == arrange) {
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                                else {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 340 && rseed > 324) {
                            var arrange = 0; //test: 900200300005801
                            //cappic in first column
                            if (rseed < 340 && rseed > 334) { //test: 900300300005801
                                arrange = 1; //cappic in second column
                            } else if (rseed < 335 && rseed > 329) { //test: 100300300005801
                                arrange = 2; //cappic in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //text in two columns and pic w cap in one, ALIGNED
                                if (col == arrange) {
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
                                    unit.style.height = "150px";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "35px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                                else {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 600*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 355 && rseed > 339) {
                            var arrange = 0; //test: 100400300005801
                            //cappic in first column
                            if (rseed < 355 && rseed > 349) { //test: 100500300005801
                                arrange = 1; //cappic in second column
                            } else if (rseed < 350 && rseed > 344) { //test: 500400300005801
                                arrange = 2; //cappic in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //pics in two columns and pic w cap in one, ALIGNED
                                if (col == arrange) {
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
                                    unit.style.height = "150px";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "35px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 370 && rseed > 354) {
                            var arrange = 0; //test: 500500300005801
                            //cappic in first column
                            if (rseed < 370 && rseed > 364) { //test: 500600300005801
                                arrange = 1; //cappic in second column
                            } else if (rseed < 365 && rseed > 359) { //test: 100600300005801
                                arrange = 2; //cappic in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //Text w title, 2 text, Aligned
                                if (col == arrange) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                                else {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "185px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 385 && rseed > 369) {
                            var arrange = 0; //test: 100700300005801
                            //cappic in first column
                            if (rseed < 385 && rseed > 379) { //test: 100800300005801
                                arrange = 1; //cappic in second column
                            } else if (rseed < 380 && rseed > 374) { //test: 500700300005801
                                arrange = 2; //cappic in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //Text w title, 2 img, Aligned
                                if (col == arrange) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 400 && rseed > 384) {
                            var arrange = 0; //test: 500800300005801
                            //cappic in first column
                            if (rseed < 400 && rseed > 394) { //test: 500900300005801
                                arrange = 1; //cappic in second column
                            } else if (rseed < 395 && rseed > 389) { //test: 100900300005801
                                arrange = 2; //cappic in thrid column
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //Text w title, 2 img w cap, Aligned
                                if (col == arrange) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
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
                                    unit.style.height = "150px";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "35px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                }
                            }
                        } else if (rseed < 415 && rseed > 399) {
                            var loremcounter = 300*p; //test: 500000400005801
                            var col;
                            for (col = 0; col < c; col++) { //all img, ALIGNED
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
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);
                            }
                        } else if (rseed < 430 && rseed > 414) {
                            var loremcounter = 300*p; //test: 500200400005801
                            var col;
                            for (col = 0; col < c; col++) { //all img w cap, ALIGNED
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
                                unit.style.height = "150px";
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                var unit = document.createElement("p");
                                unit.style.width = wth;
                                unit.style.height = "35px";
                                unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                unit.style.margin = "0px";
                                unit.style.marginBottom = "15px";
                                unit.style.overflowY = "hidden";
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);
                            }
                        } else if (rseed < 445 && rseed > 429) {
                            var loremcounter = 50*p; //test: 500300400005801
                            var col;
                            for (col = 0; col < c; col++) { //all img w cap, ALIGNED
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
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                var unit = document.createElement("p");
                                unit.style.width = "calc(" + wth + " - 20px)";
                                unit.style.height = "0px";
                                unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                unit.style.margin = "0px";
                                unit.style.position = "relative";
                                unit.style.bottom = "110px";
                                document.getElementById("coldiv" + rnum + col).appendChild(unit);
                            }
                        } else if (rseed < 470 && rseed > 444) {
                            var arrange = 0; //test: 100500400005801
                            //pic is first
                            if (rseed < 470 && rseed > 459 && checkifalternate) { //test: 100600400005801
                                alternate = false; //text is first
                                checkifalternate = false;
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //ababab text and img, ALIGNED
                                if (!alternate) {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = true;
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = false;
                                }
                            }
                        } else if (rseed < 485 && rseed > 469) {
                            var arrange = 0; //test: 100700400005801
                            //pic is first
                            if (rseed < 485 && rseed > 474 && checkifalternate) { //test: 100800400005801
                                alternate = false; //text is first
                                checkifalternate = false;
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //ababab text and img w cap, ALIGNED
                                if (!alternate) {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = true;
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
                                    unit.style.height = "150px";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "35px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = false;
                                }
                            }
                        } else if (rseed < 500 && rseed > 484) {
                            var arrange = 0; //test: 500800400005801
                            //pic is first
                            if (rseed < 500 && rseed > 494 && checkifalternate) { //test: 500900400005801
                                alternate = false; //text is first
                                checkifalternate = false;
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //ababab text w title and img, ALIGNED
                                if (!alternate) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = true;
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = false;
                                }
                            }
                        } else if (rseed < 510 && rseed > 499) {
                            var arrange = 0; //test: 100000500005801
                            //pic is first
                            if (rseed < 510 && rseed > 504 && checkifalternate) { //test: 500000500005801
                                alternate = false; //text is first
                                checkifalternate = false;
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //ababab text w title and img w cap, ALIGNED
                                if (!alternate) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = true;
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
                                    unit.style.height = "150px";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "35px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    alternate = false;
                                }
                            }
                        } else if (rseed < 530 && rseed > 509) {
                            var arrange = 0; //test: 100100500005801
                            //title, pic, and text
                            if (rseed < 530 && rseed > 524) { //test: 500200500005801
                                arrange = 1; //pic, text and title
                            } else if (rseed < 525 && rseed > 514) { //test: 100200500005801
                                arrange = 2; //title, text, and pic
                            }
                            var loremcounter = 300*p;
                            var col;
                            for (col = 0; col < c; col++) { //Text w title, 2 img, Aligned
                                if (arrange%3 == 0) {
                                    var unit = document.createElement("h3");
                                    unit.style.width = wth;
                                    unit.style.height = "20px";
                                    unit.style.overflowY = "hidden";
                                    unit.innerHTML = fillertext.substring(loremcounter, 50*(p+1));
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);

                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "165px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.marginBottom = "15px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    arrange++;
                                }
                                else if (arrange%3 == 1) {
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
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    arrange++;
                                } else {
                                    var unit = document.createElement("p");
                                    unit.style.width = wth;
                                    unit.style.height = "200px";
                                    unit.innerHTML = fillertext.substring(loremcounter, 300*(p+1));
                                    unit.style.margin = "0px";
                                    unit.style.overflowY = "hidden";
                                    document.getElementById("coldiv" + rnum + col).appendChild(unit);
                                    arrange++;
                                }
                            }
                        } else if (rseed < 550 && rseed > 529) {

                            }
                    }
                } else if (c == 2) { //three columns
                    var wth = "37vw";

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

                    //if row 1 equals... or maybe just call another function

                    var p;
                    c = 3;
                    for (p = 0; p < 5; p++) {
                        loadUnits(p, c, makecol);
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

                    //if row 1 equals... or maybe just call another function

                    var p;
                    c = 2;
                    for (p = 0; p < 4; p++) {
                        loadUnits(p, c, makecol);
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
