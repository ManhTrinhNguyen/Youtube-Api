$(document).ready(() => {

    const container = $(".container")
    const videoContainer = $(".video-container")
    const submitBtn = $(".submitBtn")
    
    
    // Fetch Data
 
    const fetchData = () => {
        let query = $("#searchInput").val()
        const data = {query : query};
        fetch("/", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept' : "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            disPlayData(data)
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
    }

    // Click Submit Btn

   submitBtn.click((e) => {
    e.preventDefault()
    fetchData()
    $("#searchInput").val("")
   })

   // display function
    const disPlayData = (data) => {
        const dataItems = data.items

        // Show result condition
        if(dataItems.length === 0) {
            $(".no-result-container").addClass("result-active")
            $(".video-container").removeClass("result-active-grid")
        }else {
            $(".video-container").addClass("result-active-grid")
            $(".no-result-container").removeClass("result-active")
        }
        // Loop Data
      
            dataItems.forEach(item => {
                console.log(item)
                 const channelId = item.snippet.channelId
                 const img = item.snippet.thumbnails.medium.url
                 const title = item.snippet.title
                 const channelTitle = item.snippet.channelTitle 
                 const publishTime = item.snippet.publishTime
                 const videoID = item.id.videoId
                 
                 
                 // New Div with Class is video
                 const newDiv = $("<a></a>")
                 newDiv.addClass("video")
                 newDiv.attr("href", `https://www.youtube.com/watch?v=${videoID}`)
                 newDiv.attr("target", "_blank")
                 
                 // New Img 
                 const newImg = $("<img />")
                 newImg.attr("src", img)
                 newImg.attr("alt", "soccer")
     
                 // new h4 with class is title
                 const newH4 = $(`<h4>${title}</h4>`)
                 newH4.addClass("title")
     
                 // new p with class is channel-title
                 const newP1 = $(`<p>${channelTitle}</p>`)
                 newP1.addClass("channel-title")
     
                 // new p with class is publish-time
                 const newP2 = $(`<p>${publishTime}</p>`)
                 newP2.addClass("publish-time")
     
                 
                 container.append(videoContainer)
                 videoContainer.append(newDiv)
                newDiv.append(newImg, newH4, newP1, newP2)
             })
    
    }

    
})

