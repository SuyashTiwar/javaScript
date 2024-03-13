(function chai(){  // it is named IIFE
    console.log("hello");
})();

// unnmaed IIFE
((name)=>{
    console.log(`hello,${name}`)
})("Suyash")