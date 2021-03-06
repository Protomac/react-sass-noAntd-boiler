export const landing2Html = `<body>

<div id="page" class="clearfix">

    <header>
        <h1><span id="logo">N</span> nicelandingpage.com</h1>
        <nav>
            <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
        </nav>
    </header>

    <h1>A Nice Looking Headline</h1>

    <section id="intro" class="clearfix">

        <img src="http://placehold.it/460x310" width="460" height="310" alt="An image relevant to the copy" />

        <div>
            <h1>A Secondary Headline</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
            </ul>

            <span id="call-to-action">Do it now! <a href="#">click here!</a></span>
        </div>

    </section>

    <article class="testimonial">
        <img src="http://placehold.it/150x180" width="150" height="180" alt="An image relevant to the copy" />
        <div>
            <h1>A Testimonial!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
    </article>

    <section id="info">
        <img src="http://placehold.it/150x180" width="150" height="180" alt="An image relevant to the copy" />
        <div>
            <h1>More Information</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
    </section>

</div>`

export const landing2Style = `
<style>
body {
	background:#eee;
	color:#111;
	font-family:"Maven Pro", Arial, Helvetica, Sans-Serif;
}

h1,h2,h3,h4,h5,h6 { text-transform:uppercase; }

a {	color:#64ACDE; }

a:focus,
a:hover {
	background:#64ACDE;
	color:#FFF;
	text-decoration:none;
}

p {
	color:#777;
	font-size:0.9em;
	line-height:1.3;
	margin-bottom:0.75em;
}

#page {
	background:#FFF;
	margin:0 auto;
	padding:20px;
	width:960px;
}

header {
	border-bottom:2px dotted #E4E4E4;
	clear:both;
	padding:20px 0;
}

header h1 {
	display:inline;
	font-size:1.25em;
	font-weight:900;
}

header h1 span#logo {
	background:#C5D33A;
	border-radius:1em; -moz-border-radius:1em; -webkit-border-radius:1em;
	color:#FFF;
	font-weight:600;
	padding:0 0.2em;
}

header nav {
	float:right;
	font-weight:bold;
	text-transform:uppercase;
}

header nav ul {}

header nav li {
	border-right:2px solid #DDD;
	display:inline;
	padding:0 0.5em;
}

header nav li:last-child {
	border:none;
}

header nav li a {
	color:#888;
	text-decoration:none;
}

#page > h1 {
	color:#64ACDE;
	font-size:3em;
	font-weight:900;
	padding:0.5em 0;
}

#intro {
	border-bottom:2px dotted #E4E4E4;
	clear:both;
	margin-bottom:20px;
	padding:20px 0;
}

#intro img {
	float:left;
	margin-right:10px;
}

#intro > div {
	float:left;
	margin-left:10px;
	width:460px;
}

#intro h1 {
	color:#555;
	font-size:1.5em;
	font-weight:bold;
	margin-bottom:0.25em;
}

#intro ul {
	font-weight:bold;
	line-height:1.5;
	list-style-type:square;
	margin-bottom:0.75em;
	padding-left:1.2em;
}

#intro span#call-to-action {
	color:#C63;
	display:block;
	font-size:1.75em;
	font-weight:600;
	margin-top:0.75em;
	text-transform:uppercase;
}

#intro span#call-to-action a {
	background:#C63;
	border-radius:12px; -moz-border-radius:12px; -webkit-border-radius:12px;
	color:#FFF;
	padding:0.25em;
	text-decoration:none;
	text-transform:none;
}

#intro span#call-to-action a:focus,
#intro span#call-to-action a:hover {
	background:#64ACDE;
}

article.testimonial {
	float:left;
	margin-right:10px;
	width:460px;
}

section#info {
	float:left;
	margin-left:10px;
	width:460px;
}

article.testimonial img,
section#info img {
	float:left;
	margin-right:10px;
}

article.testimonial h1,
section#info h1 {
	font-weight:bold;
	margin-bottom:0.25em;
}

article.testimonial > div,
section#info > div {
	padding:0.5em;
}
</style>
`
