function validateInput() {
  const input = document.getElementById("htmlInput").value;
  const result = document.getElementById("result");
  

  const jsPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const jsInlinePattern = /\son\w+="[^"]*"/gi;

  const containsJS = jsPattern.test(input) || jsInlinePattern.test(input);

  if (containsJS) {
      result.style.textDecoration ="underline";
    result.innerHTML = "Contains JavaScript.";
    result.style.color = "red";
  }
  else if(input==""){
    result.innerHTML = "Empty input.";
    result.style.color = "#00ffee";
    result.style.textDecoration ="underline";
}
else {
    result.innerHTML = "Not Contain JavaScript";
    result.style.color = "greenyellow";
    result.style.textDecoration ="underline";
  }
}
