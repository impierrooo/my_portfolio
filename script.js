/*Fonction changement de page*/

function Page_index(){
	document.getElementById("animation_page").style.animationName = "animation_page_on";
	setTimeout(fin_animation1, 500);
	setTimeout(fin_animation4, 1500);
}

function Page_présentation(){
	document.getElementById("animation_page").style.animationName = "animation_page_on";
	setTimeout(fin_animation2, 500);
	setTimeout(fin_animation4, 1500);
}

function Page_contact(){
	document.getElementById("animation_page").style.animationName = "animation_page_on";
	setTimeout(fin_animation3, 500);
	setTimeout(fin_animation4, 1500);
}

function fin_animation1(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'block';	
	document.getElementById('page_présentation').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
}

function fin_animation2(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_présentation').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
}

function fin_animation3(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_présentation').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
}

function fin_animation4(){
	document.getElementById("animation_page").style.animationName = "animation_page_off";
}

/*Fonction envoie du formulaire*/

function Formulaire() {
	var nom = document.getElementById("nom").value;
    var prénom = document.getElementById("prénom").value;
	var email = document.getElementById("email").value;
    var sujet = document.getElementById("sujet").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		Alert();
		
	} else if (prénom == '') {
		Alert();
		
	} else if (email == '') {
		Alert();

    } else if (sujet == '') {
		Alert();

    } else if (message == '') {
		Alert();
	
	} else {

		var url = "https://discord.com/api/webhooks/1013789946345173022/wJ87qxQlb32z9Nx3lYl4F0ZAX4peXFB8iYIH2VN_4DprlRrwzvKt2MObDuvfCxEwpkXt";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-type", "application/json");

		var myEmbed2 = {
			"title": "Formulaire de contact de mon Portfolio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom :",
					"value": nom,
				},
                {
					"name": "Prénom :",
					"value": prénom,
				},
				{
					"name": "Email :",
					"value": email,
				},
                {
					"name": "Sujet :",
					"value": sujet,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Form Bot",
        embeds: [ myEmbed2 ]
		}
    
		request.send(JSON.stringify(params)); 

		Envoiee()
		
		document.getElementById("nom").value = "";
        document.getElementById("prénom").value = "";
		document.getElementById("email").value = "";
        document.getElementById("sujet").value = "";
		document.getElementById("message").value = "";
	}
}

/*Fonction de changement de thème*/

function changment_theme(){
	if (color == "#0f0f0f") {
		document.getElementById("changement_theme_light").id = "changement_theme_dark";
		document.getElementById("changement_theme_light_mobile").id = "changement_theme_dark_mobile";
        color = "#ffffff";
        document.getElementById("body_index").style.backgroundColor = "#ffffff";

		document.getElementById("page_index").style.backgroundColor = "#ffffff";
		document.getElementById("page_présentation").style.backgroundColor = "#ffffff";
		document.getElementById("page_contact").style.backgroundColor = "#ffffff";

		document.getElementById("sidebar_top").style.backgroundColor = "#ffffff";
		document.getElementById("sidebar_top_text_left").style.color = "#0f0f0f";
		document.getElementById("sidebar_top_text_right1").style.color = "#0f0f0f";
		document.querySelector(".sidebar_top_text_right_center").style.color = "#0f0f0f";
		document.getElementById("sidebar_top_text_right3").style.color = "#0f0f0f";

		document.getElementById("sidebar_bottom1").style.borderTopColor = "#0f0f0f";
		document.getElementById("sidebar_bottom2").style.borderTopColor = "#0f0f0f";
		document.getElementById("sidebar_bottom3").style.borderTopColor = "#0f0f0f";

		document.getElementById("sidebar_bottom_part2_text1").style.color = "#0f0f0f";
		document.getElementById("sidebar_bottom_part2_text2").style.color = "#0f0f0f";
		document.getElementById("sidebar_bottom_part2_text3").style.color = "#0f0f0f";

		document.getElementById("sidebar_bottom_part1_réseaux_bord1").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_bord2").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_bord3").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_bord4").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_bord5").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_bord6").style.fill = "#0f0f0f";

		document.getElementById("sidebar_bottom_part1_réseaux_center1").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_center2").style.fill = "#0f0f0f";
		document.getElementById("sidebar_bottom_part1_réseaux_center3").style.fill = "#0f0f0f";

		document.getElementById("formulaire_titre_présentation1").style.color = "#0f0f0f";
		document.getElementById("formulaire_titre_présentation2").style.color = "#0f0f0f";
		document.getElementById("formulaire_titre_présentation3").style.color = "#0f0f0f";
		document.getElementById("formulaire_titre_contact").style.color = "#0f0f0f";
		document.getElementById("présentation_texte").style.color = "#0f0f0f";
		document.getElementById("présentation_texte").style.textShadow = "0 0 25px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,1), 0 0 15px rgba(255,255,255,1), 0 0 10px rgba(255,255,255,1), 0 0 5px rgba(255,255,255,1)";
		document.getElementById("présentation_texte_outils").style.color = "#0f0f0f";
		document.getElementById("présentation_texte_web").style.color = "#0f0f0f";
		document.getElementById("présentation_texte_image").src = "pierrooo2.png";

		document.getElementById("card1").style.backgroundColor = "#0f0f0f";
		document.getElementById("card2").style.backgroundColor = "#0f0f0f";
		document.getElementById("card3").style.backgroundColor = "#0f0f0f";
		document.getElementById("card4").style.backgroundColor = "#0f0f0f";
		document.getElementById("card5").style.backgroundColor = "#0f0f0f";
		document.getElementById("card6").style.backgroundColor = "#0f0f0f";

		document.getElementById("card__overlay_logo1").src = "circle2.png";
		document.getElementById("card__overlay_logo2").src = "circle2.png";
		document.getElementById("card__overlay_logo3").src = "circle2.png";
		document.getElementById("card__overlay_logo4").src = "circle2.png";
		document.getElementById("card__overlay_logo5").src = "circle2.png";
		document.getElementById("card__overlay_logo6").src = "circle2.png";

		document.getElementById("card__content_text1").style.color = "#ffffff";
		document.getElementById("card__content_text2").style.color = "#ffffff";
		document.getElementById("card__content_text3").style.color = "#ffffff";
		document.getElementById("card__content_text4").style.color = "#ffffff";
		document.getElementById("card__content_text5").style.color = "#ffffff";
		document.getElementById("card__content_text6").style.color = "#ffffff";

		document.getElementById("card__frame_text1").style.color = "#ffffff";
		document.getElementById("card__frame_text2").style.color = "#ffffff";
		document.getElementById("card__frame_text3").style.color = "#ffffff";
		document.getElementById("card__frame_text4").style.color = "#ffffff";
		document.getElementById("card__frame_text5").style.color = "#ffffff";
		document.getElementById("card__frame_text6").style.color = "#ffffff";

		document.getElementById("card__frame_logo1").src = "développement2.png";
		document.getElementById("card__frame_logo2").src = "clap2.png";
		document.getElementById("card__frame_logo3").src = "photo2.png";
		document.getElementById("card__frame_logo4").src = "design2.png";
		document.getElementById("card__frame_logo5").src = "main2.png";
		document.getElementById("card__frame_logo6").src = "réparation2.png";

		document.getElementById("formulaire_sous_titre_nom").style.color = "#0f0f0f";
		document.getElementById("formulaire_sous_titre_prénom").style.color = "#0f0f0f";
		document.getElementById("formulaire_sous_titre_email").style.color = "#0f0f0f";
		document.getElementById("formulaire_sous_titre_sujet").style.color = "#0f0f0f";
		document.getElementById("formulaire_sous_titre_message").style.color = "#0f0f0f";
		document.getElementById("formulaire_sous_titre_guillemet").style.color = "#0f0f0f";

		document.getElementById("nom").style.backgroundColor = "#dddddd";
		document.getElementById("prénom").style.backgroundColor = "#dddddd";
		document.getElementById("email").style.backgroundColor = "#dddddd";
		document.getElementById("sujet").style.backgroundColor = "#dddddd";
		document.getElementById("message").style.backgroundColor = "#dddddd";

		document.getElementById("formulaire_titre_projet").style.color = "#0f0f0f";
		document.getElementById("projet_texte").style.color = "#0f0f0f";

		document.getElementById("projet_text1").style.color = "#0f0f0f";
		document.getElementById("projet_text2").style.color = "#0f0f0f";
		document.getElementById("projet_text3").style.color = "#0f0f0f";
		document.getElementById("projet_text4").style.color = "#0f0f0f";
		document.getElementById("projet_text5").style.color = "#0f0f0f";
		document.getElementById("projet_text6").style.color = "#0f0f0f";
		document.getElementById("projet_text7").style.color = "#0f0f0f";
		document.getElementById("projet_text8").style.color = "#0f0f0f";

		document.getElementById("animation_page").style.backgroundColor = "#0f0f0f";

		document.getElementById("menu_hamburger").style.backgroundColor = "#0f0f0f";

		document.getElementById("menu_hamburger_text1").style.color = "#ffffff";
		document.getElementById("menu_hamburger_text2").style.color = "#ffffff";
		document.getElementById("menu_hamburger_text3").style.color = "#ffffff";

		document.getElementById("stroke1").style.stroke = "#ffffff";
		document.getElementById("stroke2").style.stroke = "#ffffff";
		document.getElementById("stroke3").style.stroke = "#ffffff";

		if (device == "desktop") {
			document.getElementById("formulaire_bouton").id = "formulaire_bouton_light";
			document.getElementById("bloc_projet_bouton1").id = "bloc_projet_bouton1_light";
			document.getElementById("bloc_projet_bouton2").id = "bloc_projet_bouton2_light";
			document.getElementById("bloc_projet_bouton3").id = "bloc_projet_bouton3_light";
			document.getElementById("bloc_projet_bouton4").id = "bloc_projet_bouton4_light";
		} else {
			document.getElementById("formulaire_bouton_mobile").id = "formulaire_bouton_light_mobile";
			document.getElementById("bloc_projet_bouton1_mobile").id = "bloc_projet_bouton1_light_mobile";
			document.getElementById("bloc_projet_bouton2_mobile").id = "bloc_projet_bouton2_light_mobile";
			document.getElementById("bloc_projet_bouton3_mobile").id = "bloc_projet_bouton3_light_mobile";
			document.getElementById("bloc_projet_bouton4_mobile").id = "bloc_projet_bouton4_light_mobile";
		}

	} else {
		document.getElementById("changement_theme_dark").id = "changement_theme_light";
		document.getElementById("changement_theme_dark_mobile").id = "changement_theme_light_mobile";
        color = "#0f0f0f";
        document.getElementById("body_index").style.backgroundColor = "#0f0f0f";

		document.getElementById("page_index").style.backgroundColor = "#0f0f0f";
		document.getElementById("page_présentation").style.backgroundColor = "#0f0f0f";
		document.getElementById("page_contact").style.backgroundColor = "#0f0f0f";

		document.getElementById("sidebar_top").style.backgroundColor = "#0f0f0f";
		document.getElementById("sidebar_top_text_left").style.color = "#ffffff";
		document.getElementById("sidebar_top_text_right1").style.color = "#ffffff";
		document.querySelector(".sidebar_top_text_right_center").style.color = "#ffffff";
		document.getElementById("sidebar_top_text_right3").style.color = "#ffffff";

		document.getElementById("sidebar_bottom1").style.borderTopColor = "#ffffff";
		document.getElementById("sidebar_bottom2").style.borderTopColor = "#ffffff";
		document.getElementById("sidebar_bottom3").style.borderTopColor = "#ffffff";

		document.getElementById("sidebar_bottom_part2_text1").style.color = "#ffffff";
		document.getElementById("sidebar_bottom_part2_text2").style.color = "#ffffff";
		document.getElementById("sidebar_bottom_part2_text3").style.color = "#ffffff";

		document.getElementById("sidebar_bottom_part1_réseaux_bord1").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_bord2").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_bord3").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_bord4").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_bord5").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_bord6").style.fill = "#ffffff";

		document.getElementById("sidebar_bottom_part1_réseaux_center1").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_center2").style.fill = "#ffffff";
		document.getElementById("sidebar_bottom_part1_réseaux_center3").style.fill = "#ffffff";

		document.getElementById("formulaire_titre_présentation1").style.color = "#ffffff";
		document.getElementById("formulaire_titre_présentation2").style.color = "#ffffff";
		document.getElementById("formulaire_titre_présentation3").style.color = "#ffffff";
		document.getElementById("formulaire_titre_contact").style.color = "#ffffff";
		document.getElementById("présentation_texte").style.color = "#ffffff";
		document.getElementById("présentation_texte").style.textShadow = "0 0 25px rgba(15,15,15,1), 0 0 20px rgba(15,15,15,1), 0 0 15px rgba(15,15,15,1), 0 0 10px rgba(15,15,15,1), 0 0 5px rgba(15,15,15,1)";
		document.getElementById("présentation_texte_outils").style.color = "#ffffff";
		document.getElementById("présentation_texte_web").style.color = "#ffffff";
		document.getElementById("présentation_texte_image").src = "pierrooo.png";

		document.getElementById("card1").style.backgroundColor = "#ffffff";
		document.getElementById("card2").style.backgroundColor = "#ffffff";
		document.getElementById("card3").style.backgroundColor = "#ffffff";
		document.getElementById("card4").style.backgroundColor = "#ffffff";
		document.getElementById("card5").style.backgroundColor = "#ffffff";
		document.getElementById("card6").style.backgroundColor = "#ffffff";

		document.getElementById("card__overlay_logo1").src = "circle.png";
		document.getElementById("card__overlay_logo2").src = "circle.png";
		document.getElementById("card__overlay_logo3").src = "circle.png";
		document.getElementById("card__overlay_logo4").src = "circle.png";
		document.getElementById("card__overlay_logo5").src = "circle.png";
		document.getElementById("card__overlay_logo6").src = "circle.png";

		document.getElementById("card__content_text1").style.color = "#0f0f0f";
		document.getElementById("card__content_text2").style.color = "#0f0f0f";
		document.getElementById("card__content_text3").style.color = "#0f0f0f";
		document.getElementById("card__content_text4").style.color = "#0f0f0f";
		document.getElementById("card__content_text5").style.color = "#0f0f0f";
		document.getElementById("card__content_text6").style.color = "#0f0f0f";

		document.getElementById("card__frame_text1").style.color = "#0f0f0f";
		document.getElementById("card__frame_text2").style.color = "#0f0f0f";
		document.getElementById("card__frame_text3").style.color = "#0f0f0f";
		document.getElementById("card__frame_text4").style.color = "#0f0f0f";
		document.getElementById("card__frame_text5").style.color = "#0f0f0f";
		document.getElementById("card__frame_text6").style.color = "#0f0f0f";

		document.getElementById("card__frame_logo1").src = "développement.png";
		document.getElementById("card__frame_logo2").src = "clap.png";
		document.getElementById("card__frame_logo3").src = "photo.png";
		document.getElementById("card__frame_logo4").src = "design.png";
		document.getElementById("card__frame_logo5").src = "main.png";
		document.getElementById("card__frame_logo6").src = "réparation.png";

		document.getElementById("formulaire_sous_titre_nom").style.color = "#ffffff";
		document.getElementById("formulaire_sous_titre_prénom").style.color = "#ffffff";
		document.getElementById("formulaire_sous_titre_email").style.color = "#ffffff";
		document.getElementById("formulaire_sous_titre_sujet").style.color = "#ffffff";
		document.getElementById("formulaire_sous_titre_message").style.color = "#ffffff";
		document.getElementById("formulaire_sous_titre_guillemet").style.color = "#ffffff";

		document.getElementById("nom").style.backgroundColor = "#ffffff";
		document.getElementById("prénom").style.backgroundColor = "#ffffff";
		document.getElementById("email").style.backgroundColor = "#ffffff";
		document.getElementById("sujet").style.backgroundColor = "#ffffff";
		document.getElementById("message").style.backgroundColor = "#ffffff";

		document.getElementById("formulaire_titre_projet").style.color = "#ffffff";
		document.getElementById("projet_texte").style.color = "#ffffff";

		document.getElementById("projet_text1").style.color = "#ffffff";
		document.getElementById("projet_text2").style.color = "#ffffff";
		document.getElementById("projet_text3").style.color = "#ffffff";
		document.getElementById("projet_text4").style.color = "#ffffff";
		document.getElementById("projet_text5").style.color = "#ffffff";
		document.getElementById("projet_text6").style.color = "#ffffff";
		document.getElementById("projet_text7").style.color = "#ffffff";
		document.getElementById("projet_text8").style.color = "#ffffff";

		document.getElementById("animation_page").style.backgroundColor = "#ffffff";

		document.getElementById("menu_hamburger").style.backgroundColor = "#ffffff";

		document.getElementById("menu_hamburger_text1").style.color = "#0f0f0f";
		document.getElementById("menu_hamburger_text2").style.color = "#0f0f0f";
		document.getElementById("menu_hamburger_text3").style.color = "#0f0f0f";

		document.getElementById("stroke1").style.stroke = "#0f0f0f";
		document.getElementById("stroke2").style.stroke = "#0f0f0f";
		document.getElementById("stroke3").style.stroke = "#0f0f0f";

		if (device == "desktop") {
			document.getElementById("formulaire_bouton_light").id = "formulaire_bouton";
			document.getElementById("bloc_projet_bouton1_light").id = "bloc_projet_bouton1";
			document.getElementById("bloc_projet_bouton2_light").id = "bloc_projet_bouton2";
			document.getElementById("bloc_projet_bouton3_light").id = "bloc_projet_bouton3";
			document.getElementById("bloc_projet_bouton4_light").id = "bloc_projet_bouton4";
		} else {
			document.getElementById("formulaire_bouton_light_mobile").id = "formulaire_bouton_mobile";
			document.getElementById("bloc_projet_bouton1_light_mobile").id = "bloc_projet_bouton1_mobile";
			document.getElementById("bloc_projet_bouton2_light_mobile").id = "bloc_projet_bouton2_mobile";
			document.getElementById("bloc_projet_bouton3_light_mobile").id = "bloc_projet_bouton3_mobile";
			document.getElementById("bloc_projet_bouton4_light_mobile").id = "bloc_projet_bouton4_mobile";
		}
	}
}

/*Fonction de changement de langue*/

function changment_langue(){
	if (langue == "français") {
		document.getElementById("changement_langue_en").id = "changement_langue_fr";
		document.getElementById("changement_langue_en_mobile").id = "changement_langue_fr_mobile";
        langue = "anglais";
        document.getElementById("sidebar_top_text_right1").innerHTML = "My projects";
		document.getElementById("sidebar_top_text_right2").innerHTML = "About";
		document.getElementById("sidebar_top_text_right3").innerHTML = "Contact me";

		document.getElementById("menu_hamburger_text1").innerHTML = "My projects";
		document.getElementById("menu_hamburger_text2").innerHTML = "About";
		document.getElementById("menu_hamburger_text3").innerHTML = "Contact me";

		document.getElementById("sidebar_bottom_part2_text1").innerHTML = "© 2022 Pierrooo, All rights reserved.";
		document.getElementById("sidebar_bottom_part2_text2").innerHTML = "© 2022 Pierrooo, All rights reserved.";
		document.getElementById("sidebar_bottom_part2_text3").innerHTML = "© 2022 Pierrooo, All rights reserved.";

		document.getElementById("formulaire_titre_présentation1").innerHTML = "About";
		document.getElementById("présentation_texte").innerHTML = "I am designate, video editor and web and mobile developer. Nowadays computers are very present with websites or even social networks. The sites are increasingly responsive with very advanced designs. Video and photo editing are always more innovative, but you are in the right place. Everything you are looking for is available here. I’ll let you take a look at my portfolio !";
		document.getElementById("formulaire_titre_présentation2").innerHTML = "My tools";
		document.getElementById("présentation_texte_outils").innerHTML = "Design and editing";
		document.getElementById("présentation_texte_web").innerHTML = "Web and mobile development";
		document.getElementById("formulaire_titre_présentation3").innerHTML = "My service";

		document.getElementById("card__frame_text1").innerHTML = "Web and mobile development";
		document.getElementById("card__frame_text2").innerHTML = "Video editing";
		document.getElementById("card__frame_text3").innerHTML = "Photo creation";
		document.getElementById("card__frame_text4").innerHTML = "Innovative design";
		document.getElementById("card__frame_text5").innerHTML = "Constant support";
		document.getElementById("card__frame_text6").innerHTML = "Web maintenance";
		document.getElementById("card__content_text1").innerHTML = "I develop websites and mobile applications that fits on computer, mobile and all other formats.";
		document.getElementById("card__content_text2").innerHTML = "I make video montages for your various social networks such as Youtube, Instagram, TikTok, ...";
		document.getElementById("card__content_text3").innerHTML = "I propose photo montages for your websites or for the banners and publications of your various networks.";
		document.getElementById("card__content_text4").innerHTML = "My creativity and innovation will make your projects unique with a design adapted to your expectations.";
		document.getElementById("card__content_text5").innerHTML = "I provide constant support during the realization of your projects so that everything goes smoothly.";
		document.getElementById("card__content_text6").innerHTML = "Once your website has been created, I provide you with regular maintenance to update your site and check its security.";

		document.getElementById("formulaire_titre_contact").innerHTML = "Contact me";
		document.getElementById("formulaire_sous_titre_nom").innerHTML = "First name <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_prénom").innerHTML = "Last name <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_email").innerHTML = "Email <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_sujet").innerHTML = "Topic <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_message").innerHTML = "Message content <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_guillemet").innerHTML = "<span style='color:red'>*</span> Mandatory fields";

		if (color == "#0f0f0f") {
			if (device == "desktop") {
				document.getElementById("formulaire_bouton").value = "Send";
				document.getElementById("bloc_projet_bouton1").value = "Visit the website";
				document.getElementById("bloc_projet_bouton2").value = "Visit the website";
				document.getElementById("bloc_projet_bouton3").value = "View an example";
				document.getElementById("bloc_projet_bouton4").value = "Look at an example";
			} else {
				document.getElementById("formulaire_bouton_mobile").value = "Send";
				document.getElementById("bloc_projet_bouton1_mobile").value = "Visit the website";
				document.getElementById("bloc_projet_bouton2_mobile").value = "Visit the website";
				document.getElementById("bloc_projet_bouton3_mobile").value = "View an example";
				document.getElementById("bloc_projet_bouton4_mobile").value = "Look at an example";
			}
		} else {
			if (device == "desktop") {
				document.getElementById("formulaire_bouton_light").value = "Send";
				document.getElementById("bloc_projet_bouton1_light").value = "Visit the website";
				document.getElementById("bloc_projet_bouton2_light").value = "Visit the website";
				document.getElementById("bloc_projet_bouton3_light").value = "View an example";
				document.getElementById("bloc_projet_bouton4_light").value = "Look at an example";
			} else {
				document.getElementById("formulaire_bouton_light_mobile").value = "Send";
				document.getElementById("bloc_projet_bouton1_light_mobile").value = "Visit the website";
				document.getElementById("bloc_projet_bouton2_light_mobile").value = "Visit the website";
				document.getElementById("bloc_projet_bouton3_light_mobile").value = "View an example";
				document.getElementById("bloc_projet_bouton4_light_mobile").value = "Look at an example";
			}
		}

		document.getElementById("formulaire_alert_text").innerHTML = "Please complete all required fields before sending your message.";
		document.getElementById("formulaire_envoie_text").innerHTML = "Your message has been sent.";

		document.getElementById("formulaire_titre_projet").innerHTML = "My projects";
		document.getElementById("projet_texte1").innerHTML = "Here are some examples of my achievements, you can also learn more ";
		document.getElementById("projet_texte2").innerHTML = "about";
		document.getElementById("projet_texte3").innerHTML = " me or ";
		document.getElementById("projet_texte4").innerHTML = "contact me";
		document.getElementById("projet_texte5").innerHTML = " directly.";

		document.getElementById("projet_text1").innerHTML = "Icon E-sport";
		document.getElementById("projet_text2").innerHTML = "Icon E-sport is a French e-sport structure that continues to progress in its field. Currently one of the most ambitious structures, with quality and experienced members. With a good reputation, Icon E-sport is very close to its community, because it is thanks to it that the structure still lives today.";
		document.getElementById("projet_text3").innerHTML = "Aux Délices de Livré";
		document.getElementById("projet_text4").innerHTML = "I proposed to a local bakery to develop on the internet by creating a website. This will make it possible to showcase their creations and better communicate with their customers. The website adapts to mobile, tablet and computer.";
		document.getElementById("projet_text5").innerHTML = "Video editing for SemkOo";
		document.getElementById("projet_text6").innerHTML = "SemkOo is a 19-year-old youtuber and streamer with a community of over 40,000 members on its social networks. I worked with him for a few months as a video editor mainly for his YouTube channel but also for his other social networks.";
		document.getElementById("projet_text7").innerHTML = "Photo production";
		document.getElementById("projet_text8").innerHTML = "I made several banners mainly on Photoshop for different social networks such as Youtube, Twitch or Twitter. The banners were multi-format as they adapted to the mobile, tablet, computer and even television formats.";
	} else {
		document.getElementById("changement_langue_fr").id = "changement_langue_en";
		document.getElementById("changement_langue_fr_mobile").id = "changement_langue_en_mobile";
        langue = "français";
        document.getElementById("sidebar_top_text_right1").innerHTML = "Mes projets";
		document.getElementById("sidebar_top_text_right2").innerHTML = "À propos";
		document.getElementById("sidebar_top_text_right3").innerHTML = "Me contacter";

		document.getElementById("menu_hamburger_text1").innerHTML = "Mes projets";
		document.getElementById("menu_hamburger_text2").innerHTML = "À propos";
		document.getElementById("menu_hamburger_text3").innerHTML = "Me contacter";

		document.getElementById("sidebar_bottom_part2_text1").innerHTML = "© 2022 Pierrooo, Tous droits réservés.";
		document.getElementById("sidebar_bottom_part2_text2").innerHTML = "© 2022 Pierrooo, Tous droits réservés.";
		document.getElementById("sidebar_bottom_part2_text3").innerHTML = "© 2022 Pierrooo, Tous droits réservés.";

		document.getElementById("formulaire_titre_présentation1").innerHTML = "À propos";
		document.getElementById("présentation_texte").innerHTML = "Je suis désigner, monteur vidéo et développeur web et mobile. De nos jours l'informatique est très présent avec les sites web ou même les réseaux sociaux. Les sites sont de plus en plus réactifs avec des designs très poussés. Les montages vidéos et photos sont quant à eux toujours plus innovants, mais vous êtes au bon endroit. Tout ce que vous recherchez est disponible ici-même. Allez je vous laisse faire un tour sur mon portfolio !";
		document.getElementById("formulaire_titre_présentation2").innerHTML = "Mes outils";
		document.getElementById("présentation_texte_outils").innerHTML = "Design et montage";
		document.getElementById("présentation_texte_web").innerHTML = "Développement web et mobile";
		document.getElementById("formulaire_titre_présentation3").innerHTML = "Mes services";

		document.getElementById("card__frame_text1").innerHTML = "Développement web et mobile";
		document.getElementById("card__frame_text2").innerHTML = "Montage vidéo";
		document.getElementById("card__frame_text3").innerHTML = "Création photo";
		document.getElementById("card__frame_text4").innerHTML = "Design innovant";
		document.getElementById("card__frame_text5").innerHTML = "Accompagnement constant";
		document.getElementById("card__frame_text6").innerHTML = "Maintenance web";
		document.getElementById("card__content_text1").innerHTML = "Je développe des sites web et des applications mobiles qui s'adapte sur ordinateur, mobile et tous les autres formats.";
		document.getElementById("card__content_text2").innerHTML = "Je réalise des montages vidéos pour vos différents réseaux sociaux tels que Youtube, Instagram, TikTok, ...";
		document.getElementById("card__content_text3").innerHTML = "Je propose des montages photos pour vos sites web ou bien pour les bannières et publications de vos différents réseaux.";
		document.getElementById("card__content_text4").innerHTML = "Ma créativité et mon innovation sauront rendre vos projets uniques avec un design adapté à vos attentes.";
		document.getElementById("card__content_text5").innerHTML = "J'assure un accompagnement constant durant la réalisation de vos projets afin que tout se déroule sans problème.";
		document.getElementById("card__content_text6").innerHTML = "Une fois votre site web réalisé, je mets à votre disposition des maintenances régulières pour actualiser votre site et vérifier sa sécurité.";

		document.getElementById("formulaire_titre_contact").innerHTML = "Me contacter";
		document.getElementById("formulaire_sous_titre_nom").innerHTML = "Nom <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_prénom").innerHTML = "Prénom <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_email").innerHTML = "Email <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_sujet").innerHTML = "Sujet <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_message").innerHTML = "Contenu du message <span style='color:red'>*</span>";
		document.getElementById("formulaire_sous_titre_guillemet").innerHTML = "<span style='color:red'>*</span> Champs obligatoires";

		if (color == "#0f0f0f") {
			if (device == "desktop") {
				document.getElementById("formulaire_bouton").value = "Envoyer";
				document.getElementById("bloc_projet_bouton1").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton2").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton3").value = "Visionner un exemple";
				document.getElementById("bloc_projet_bouton4").value = "Regarder un exemple";
			} else {
				document.getElementById("formulaire_bouton_mobile").value = "Envoyer";
				document.getElementById("bloc_projet_bouton1_mobile").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton2_mobile").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton3_mobile").value = "Visionner un exemple";
				document.getElementById("bloc_projet_bouton4_mobile").value = "Regarder un exemple";
			}
			
		} else {
			if (device == "desktop") {
				document.getElementById("formulaire_bouton_light").value = "Envoyer";
				document.getElementById("bloc_projet_bouton1_light").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton2_light").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton3_light").value = "Visionner un exemple";
				document.getElementById("bloc_projet_bouton4_light").value = "Regarder un exemple";
			} else {
				document.getElementById("formulaire_bouton_light_mobile").value = "Envoyer";
				document.getElementById("bloc_projet_bouton1_light_mobile").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton2_light_mobile").value = "Visiter le site web";
				document.getElementById("bloc_projet_bouton3_light_mobile").value = "Visionner un exemple";
				document.getElementById("bloc_projet_bouton4_light_mobile").value = "Regarder un exemple";
			}
		}
		
		document.getElementById("formulaire_alert_text").innerHTML = "Veuillez remplir tous les champs requis avant d'envoyer votre message.";
		document.getElementById("formulaire_envoie_text").innerHTML = "Votre message a bien été envoyé.";

		document.getElementById("formulaire_titre_projet").innerHTML = "Mes projets";
		document.getElementById("projet_texte1").innerHTML = "Voici quelques exemples de mes réalisations, tu peux aussi en savoir plus ";
		document.getElementById("projet_texte2").innerHTML = "à propos";
		document.getElementById("projet_texte3").innerHTML = " de moi ou directement ";
		document.getElementById("projet_texte4").innerHTML = "me contacter";
		document.getElementById("projet_texte5").innerHTML = ".";

		document.getElementById("projet_text1").innerHTML = "Icon E-sport";
		document.getElementById("projet_text2").innerHTML = "Icon E-sport est une structure e-sport française qui ne cesse de progresser dans son domaine. Actuellement l'une des structures les plus ambitieuses, avec des membres de qualité et d'expérience. Dotée d'une bonne réputation, Icon E-sport est très proche de sa communauté, car c'est grâce à elle que la structure vit encore aujourd'hui.";
		document.getElementById("projet_text3").innerHTML = "Aux Délices de Livré";
		document.getElementById("projet_text4").innerHTML = "J'ai proposé à une boulangerie locale de se développer sur internet par la réalisation d'un site web. Cela va permettre de mettre leurs créations en vitrine et de mieux communiquer avec leurs clients. Le site web s'adapte sur mobile, tablette et ordinateur.";
		document.getElementById("projet_text5").innerHTML = "Montage vidéo pour SemkOo";
		document.getElementById("projet_text6").innerHTML = "SemkOo est un youtuber et streamer de 19 ans avec une communauté de plus de 40 000 membres sur ses réseaux sociaux. J'ai collaboré avec lui durant quelques mois en tant que monteur vidéo principalement pour sa chaîne Youtube mais aussi pour ses autres réseaux sociaux.";
		document.getElementById("projet_text7").innerHTML = "Réalisation photo";
		document.getElementById("projet_text8").innerHTML = "J'ai réalisé plusieurs bannières principalement sur Photoshop pour différents réseaux sociaux tels que Youtube, Twitch ou Twitter. Les bannières étaient multiformats car elles s'adaptaient sur le format mobile, tablette, ordinateur et même sur télévision.";
	}
}

/*On hover*/

function Highlight(id) {
	document.getElementById(id).style.fill = "#77b5fe";
}

function UnHighlight(id) {
	if (color == "#0f0f0f") {
		document.getElementById(id).style.fill = "#ffffff";
	} else {
		document.getElementById(id).style.fill = "#0f0f0f";
	}
	
}

function Highlight_text(id) {
	document.getElementById(id).style.color = "#77b5fe";
}

function UnHighlight_text(id) {
	if (color == "#0f0f0f") {
		document.getElementById(id).style.color = "#ffffff";
	} else {
		document.getElementById(id).style.color = "#0f0f0f";
	}
}

function UnHighlight_text_menu(id) {
	if (color == "#0f0f0f") {
		document.getElementById(id).style.color = "#0f0f0f";
	} else {
		document.getElementById(id).style.color = "#ffffff";
	}
}

function Focus_nom() {
	document.getElementById("formulaire_sous_titre_nom").style.color = "#77b5fe";
}

function Un_Focus_nom() {
	if (color == "#0f0f0f") {
		document.getElementById("formulaire_sous_titre_nom").style.color = "#ffffff";
	} else {
		document.getElementById("formulaire_sous_titre_nom").style.color = "#0f0f0f";
	}
}

function Focus_prénom() {
	document.getElementById("formulaire_sous_titre_prénom").style.color = "#77b5fe";
}

function Un_Focus_prénom() {
	if (color == "#0f0f0f") {
		document.getElementById("formulaire_sous_titre_prénom").style.color = "#ffffff";
	} else {
		document.getElementById("formulaire_sous_titre_prénom").style.color = "#0f0f0f";
	}
}

function Focus_email() {
	document.getElementById("formulaire_sous_titre_email").style.color = "#77b5fe";
}

function Un_Focus_email() {
	if (color == "#0f0f0f") {
		document.getElementById("formulaire_sous_titre_email").style.color = "#ffffff";
	} else {
		document.getElementById("formulaire_sous_titre_email").style.color = "#0f0f0f";
	}
}

function Focus_sujet() {
	document.getElementById("formulaire_sous_titre_sujet").style.color = "#77b5fe";
}

function Un_Focus_sujet() {
	if (color == "#0f0f0f") {
		document.getElementById("formulaire_sous_titre_sujet").style.color = "#ffffff";
	} else {
		document.getElementById("formulaire_sous_titre_sujet").style.color = "#0f0f0f";
	}
}

function Focus_message() {
	document.getElementById("formulaire_sous_titre_message").style.color = "#77b5fe";
}

function Un_Focus_message() {
	if (color == "#0f0f0f") {
		document.getElementById("formulaire_sous_titre_message").style.color = "#ffffff";
	} else {
		document.getElementById("formulaire_sous_titre_message").style.color = "#0f0f0f";
	}
}

/*Alert*/

function Alert() {
	document.getElementById("formulaire_alert").style.animationName = "animation_a";
	setTimeout(Timer14, 700);
	setTimeout(Timer13, 1700);
	setTimeout(Timer12, 2700);
	setTimeout(Timer11, 3700);
	setTimeout(Timer10, 4700);
	setTimeout(Timer9, 5700);
}

function Envoiee() {
	document.getElementById("formulaire_envoie").style.animationName = "animation_c";
	setTimeout(Timer24, 700);
	setTimeout(Timer23, 1700);
	setTimeout(Timer22, 2700);
	setTimeout(Timer21, 3700);
	setTimeout(Timer20, 4700);
	setTimeout(Timer19, 5700);
}

function Timer14(){
	document.getElementById("formulaire_alert_text2").innerHTML = "4";
}

function Timer13(){
	document.getElementById("formulaire_alert_text2").innerHTML = "3";
}

function Timer12(){
	document.getElementById("formulaire_alert_text2").innerHTML = "2";
}

function Timer11(){
	document.getElementById("formulaire_alert_text2").innerHTML = "1";
}

function Timer10(){
	document.getElementById("formulaire_alert_text2").innerHTML = "0";
	document.getElementById("formulaire_alert").style.animationName = "animation_b";
}

function Timer9(){
	document.getElementById("formulaire_alert_text2").innerHTML = "5";
}

function Timer24(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "4";
}

function Timer23(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "3";
}

function Timer22(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "2";
}

function Timer21(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "1";
}

function Timer20(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "0";
	document.getElementById("formulaire_envoie").style.animationName = "animation_d";
}

function Timer19(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "5";
}

/*Animation du menu*/

function Menu_on() {
	if (animation_menu == "off") {
		document.getElementById("menu_hamburger").style.animationName = "menu_hamburger_on";
		if (color == "#0f0f0f") {
			setTimeout(Color1,400)
		} else {
			setTimeout(Color2,400)
		}
		animation_menu = "on"
	} else {
		document.getElementById("menu_hamburger").style.animationName = "menu_hamburger_off";
		if (color == "#0f0f0f") {
			document.getElementById("stroke1").style.stroke = "#ffffff";
			document.getElementById("stroke2").style.stroke = "#ffffff";
			document.getElementById("stroke3").style.stroke = "#ffffff";
		} else {
			document.getElementById("stroke1").style.stroke = "#0f0f0f";
			document.getElementById("stroke2").style.stroke = "#0f0f0f";
			document.getElementById("stroke3").style.stroke = "#0f0f0f";
		}
		animation_menu = "off"
	}
}

function Color1(){
	document.getElementById("stroke1").style.stroke = "#0f0f0f";
	document.getElementById("stroke2").style.stroke = "#0f0f0f";
	document.getElementById("stroke3").style.stroke = "#0f0f0f";
}

function Color2(){
	document.getElementById("stroke1").style.stroke = "#ffffff";
	document.getElementById("stroke2").style.stroke = "#ffffff";
	document.getElementById("stroke3").style.stroke = "#ffffff";
}

function Menu_on1(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'block';	
	document.getElementById('page_présentation').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
	document.getElementById("menu_hamburger").style.animationName = "menu_hamburger_off";
	if (color == "#0f0f0f") {
		document.getElementById("stroke1").style.stroke = "#ffffff";
		document.getElementById("stroke2").style.stroke = "#ffffff";
		document.getElementById("stroke3").style.stroke = "#ffffff";
	} else {
		document.getElementById("stroke1").style.stroke = "#0f0f0f";
		document.getElementById("stroke2").style.stroke = "#0f0f0f";
		document.getElementById("stroke3").style.stroke = "#0f0f0f";
	}
	animation_menu = "off"
	document.getElementById('ham').classList.toggle('active')
}

function Menu_on2(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_présentation').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
	document.getElementById("menu_hamburger").style.animationName = "menu_hamburger_off";
	if (color == "#0f0f0f") {
		document.getElementById("stroke1").style.stroke = "#ffffff";
		document.getElementById("stroke2").style.stroke = "#ffffff";
		document.getElementById("stroke3").style.stroke = "#ffffff";
	} else {
		document.getElementById("stroke1").style.stroke = "#0f0f0f";
		document.getElementById("stroke2").style.stroke = "#0f0f0f";
		document.getElementById("stroke3").style.stroke = "#0f0f0f";
	}
	animation_menu = "off"
	document.getElementById('ham').classList.toggle('active')
}

function Menu_on3(){
	window.top.window.scrollTo(0,0)
	document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_présentation').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
	document.getElementById("menu_hamburger").style.animationName = "menu_hamburger_off";
	if (color == "#0f0f0f") {
		document.getElementById("stroke1").style.stroke = "#ffffff";
		document.getElementById("stroke2").style.stroke = "#ffffff";
		document.getElementById("stroke3").style.stroke = "#ffffff";
	} else {
		document.getElementById("stroke1").style.stroke = "#0f0f0f";
		document.getElementById("stroke2").style.stroke = "#0f0f0f";
		document.getElementById("stroke3").style.stroke = "#0f0f0f";
	}
	animation_menu = "off"
	document.getElementById('ham').classList.toggle('active')
}