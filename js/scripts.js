$(document).ready(function() {
  $(document).ready(function() {
    const lang = (prompt("webapps, microsoft-apps or android-apps?"));
  
    if (lang == "webapps") {
      return alert("you should learn ruby")
    }
    if (lang == "microsoft-apps") {
      return alert("you should learn C#")
    }
    if (lang == "android-apps") {
      return alert("you should learn java")
    }
  });
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const prompt1Input = $("input#prompt1").val();
    const prompt2Input = $("input#prompt2").val();
    const prompt3Input = $("input#prompt3").val();
    const prompt4Input = $("input#prompt4").val();
  
    $(".prompt1").text(prompt1Input);
    $(".prompt2").text(prompt2Input);
    $(".prompt3").text(prompt3Input);
    $(".prompt4").text(prompt4Input);
    $("story").show();
  });

});