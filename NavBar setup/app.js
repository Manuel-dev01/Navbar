// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn")
navToggle.addEventListener("click", function(){
     console.log(sidebar.classList.contains("random"))
     if (sidebar.classList.contains("show-sidebar")){
         sidebar.classList.remove("show-sidebar");
     } else {
         sidebar.classList.add("show-sidebar");
     }

    //OR
    // links.classList.toggle("show-links")
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})






























//MY METHOD, ALTHOUGH NOT PRACTICAL BECAUSE AM ADDING THE CLASSLIST TO THE BUTTON//
// navToggle.addEventListener("click", function(e){
//       const styles = e.currentTarget.classList
//         console.log(styles)
//       if (styles.contains("show-links")){
//          links.classList.remove("show-links");
//       } else {
//          links.classList.add("show-links");
//       }
// })
