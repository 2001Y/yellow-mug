---
title: "Contact"
date: 2021-01-25T18:48:21+09:00
css: "contact"
ogp: "ogp/contact.jpg"
---
<form name="contact" method="POST" data-netlify="true" action="/contact/done">
    <label>
    <h2>Name</h2>
    <input type="text" name="name" placeholder="Your Name" id="name"/>
    </label>
    <label>
    <h2>Email</h2>
    <input type="email" name="email" placeholder="Your Email" id="mail"/>
    </label>
    <label>
    <h2>Message</h2>
    <textarea name="message" placeholder="Message to us" id=form></textarea>
    </label>
    <button type="submit" id="submit">Send</button>
</form>