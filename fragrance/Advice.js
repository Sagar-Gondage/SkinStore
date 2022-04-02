data = [
   
    { image : "https://blogscdn.thehut.net/app/uploads/sites/36/2022/02/Copy-of-Crystal-Retinal-Group-x4-White-Background-2000-x-2000-US_1645541369_1200x672_acf_cropped-700x392.jpg",
      care:"SKINCARE",
      name : "Medik8: The Ultimate Nighttime Routine",
      span:"a month ago",
      spanname:"• Natalie Rosselli",
      },
    { image : "https://blogscdn.thehut.net/app/uploads/sites/36/2022/02/ashley-piszek-crSkE1CKQL0-unsplash-1_1645642857-scaled_1200x672_acf_cropped-700x392.jpg",
      care:"SKINCARE",
      name : "The Perfect Pink: Find Your Lip Shade",
      span:"a month ago",
      spanname:"• Natalie Rosselli",
      },
    { image : "https://blogscdn.thehut.net/app/uploads/sites/36/2022/03/MicrosoftTeams-image-7_1648244824-scaled_1200x672_acf_cropped-700x392.jpg",
      care:"SKINCARE",
      name : "Our Staff Gift Set Picks",
      span:"a month ago",
      spanname:"• Natalie Rosselli",
      },
    { image : "https://blogscdn.thehut.net/wp-content/uploads/sites/36/2017/09/05065847/1200x672-165973727-CG-LF-US-blog-20_1200x672_acf_cropped-700x392.jpg",
      care:"SKINCARE",
      name : "The Best Products For Your Winter Skin Care Routine",
      span:"a month ago",
      spanname:"• Natalie Rosselli",
      },
    
    
    ]

    data1 = [
        { image : "https://blogscdn.thehut.net/app/uploads/sites/36/2022/03/iiii_1646688735_1200x672_acf_cropped-700x392.jpg",
        care:"SKINCARE",
        name : "At the Top of Its Class: SkinCeuticals New Phyto A+ Brightening Treatment",
        span:"a month ago",
        spanname:"• Natalie Rosselli",
        },
    ]





document.querySelector("#tipbuttonshowmore").addEventListener("click",showfun)

function showfun()
{
    data1.map(function(el){
  
    var divm = document.createElement("div")
    divm.setAttribute("class","maintips")
    var img = document.createElement("img")
    img.src=el.image
    var p = document.createElement("p")
    p.innerText=el.care
    var h2 = document.createElement("h2")
    h2.innerText=el.name
    var span = document.createElement("span")
    span.innerText=el.span
    var spanname = document.createElement("span")
    spanname.innerText=el.spanname
   
    divm.append(img,p,h2,span,spanname)

    document.querySelector(".maintipcont").append(divm)

});

    // small div work
    data.map(function(el){
    var div = document.createElement("div")
    div.setAttribute("class","subtip")

    var div1 = document.createElement("div")
    div1.setAttribute("class","innertip")

    var img = document.createElement("img")
    img.src=el.image

    var p = document.createElement("p")
    p.innerText=el.care
    
    var h2 = document.createElement("h2")
    h2.innerText=el.name
    
    var span = document.createElement("span")
    span.innerText=el.span
   
    var spanname = document.createElement("span")
    spanname.innerText=el.spanname
 
   
    div1.append(p,h2,span,spanname)
    div.append(img,div1)

    document.querySelector(".maintipcont").append(div)

});

}