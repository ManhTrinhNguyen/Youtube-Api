$(document).ready(() => {

    const container = $(".container")
    const videoContainer = $(".video-container")
    const submitBtn = $(".submitBtn")
    
    
    // Fetch Data
 
    const fetchData = (queryChannel) => {
        let query = $("#searchInput").val()
        
        
        const data = {
            query : query, 
        }
        
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
            console.log(data)
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
        console.log(data)
        const dataItems = data.items
        //console.log(dataItems)
        // Show result condition
        if(dataItems.length === 0) {
            $(".no-result-container").addClass("result-active")
            $(".video-container").removeClass("result-active-grid")
        }else {
            $(".video-container").addClass("result-active-grid")
            $(".no-result-container").removeClass("result-active")
        }

        
            const img1 = dataItems[0].snippet.thumbnails.medium.url
            const title1 = dataItems[0].snippet.title
            const channelTitle1 = dataItems[0].snippet.channelTitle 
            const publishTime1 = dataItems[0].snippet.publishTime
            const videoID1 = dataItems[0].id.videoId

            $(".video1").attr("href", `https://www.youtube.com/watch?v=${videoID1}`)
            $(".video1").attr("target", "_blank")
            $(".img1").attr("src", img1)
            $(".title1").text(title1)
            $(".channel-title1").text(channelTitle1)
            $(".publish-time1").text(publishTime1)

            const img2 = dataItems[1].snippet.thumbnails.medium.url
            const title2 = dataItems[1].snippet.title
            const channelTitle2 = dataItems[1].snippet.channelTitle 
            const publishTime2 = dataItems[1].snippet.publishTime
            const videoID2 = dataItems[1].id.videoId

            $(".video2").attr("href", `https://www.youtube.com/watch?v=${videoID2}`)
            $(".video2").attr("target", "_blank")
            $(".img2").attr("src", img2)
            $(".title2").text(title2)
            $(".channel-title2").text(channelTitle2)
            $(".publish-time2").text(publishTime2)

            const img3 = dataItems[2].snippet.thumbnails.medium.url
            const title3 = dataItems[2].snippet.title
            const channelTitle3 = dataItems[2].snippet.channelTitle 
            const publishTime3 = dataItems[2].snippet.publishTime
            const videoID3 = dataItems[2].id.videoId

            $(".video3").attr("href", `https://www.youtube.com/watch?v=${videoID3}`)
            $(".video3").attr("target", "_blank")
            $(".img3").attr("src", img3)
            $(".title3").text(title3)
            $(".channel-title3").text(channelTitle3)
            $(".publish-time3").text(publishTime3)

            const img4 = dataItems[3].snippet.thumbnails.medium.url
            const title4 = dataItems[3].snippet.title
            const channelTitle4 = dataItems[3].snippet.channelTitle 
            const publishTime4 = dataItems[3].snippet.publishTime
            const videoID4 = dataItems[3].id.videoId

            $(".video4").attr("href", `https://www.youtube.com/watch?v=${videoID4}`)
            $(".video4").attr("target", "_blank")
            $(".img4").attr("src", img4)
            $(".title4").text(title4)
            $(".channel-title4").text(channelTitle4)
            $(".publish-time4").text(publishTime4)


            const img5 = dataItems[4].snippet.thumbnails.medium.url
            const title5 = dataItems[4].snippet.title
            const channelTitle5 = dataItems[4].snippet.channelTitle 
            const publishTime5 = dataItems[4].snippet.publishTime
            const videoID5 = dataItems[4].id.videoId

            $(".video5").attr("href", `https://www.youtube.com/watch?v=${videoID5}`)
            $(".video5").attr("target", "_blank")
            $(".img5").attr("src", img5)
            $(".title5").text(title5)
            $(".channel-title5").text(channelTitle5)
            $(".publish-time5").text(publishTime5)

            const img6 = dataItems[5].snippet.thumbnails.medium.url
            const title6 = dataItems[5].snippet.title
            const channelTitle6 = dataItems[5].snippet.channelTitle 
            const publishTime6 = dataItems[5].snippet.publishTime
            const videoID6 = dataItems[5].id.videoId

            $(".video6").attr("href", `https://www.youtube.com/watch?v=${videoID6}`)
            $(".video6").attr("target", "_blank")
            $(".img6").attr("src", img6)
            $(".title6").text(title6)
            $(".channel-title6").text(channelTitle6)
            $(".publish-time6").text(publishTime6)
            


        // Loop Data
            // dataItems.forEach(item => {
            
            //      const img = item.snippet.thumbnails.medium.url
                //  const title = item.snippet.title
                //  const channelTitle = item.snippet.channelTitle 
                //  const publishTime = item.snippet.publishTime
                //  const videoID = item.id.videoId
    
            //      // New Div with Class is video
            //     const newDiv = $("<a></a>")
            //     newDiv.addClass("video")
            //     newDiv.attr("href", `https://www.youtube.com/watch?v=${videoID}`)
            //     newDiv.attr("target", "_blank")
                
            //     // New Img 
            //     const newImg = $("<img />")
            //     newImg.attr("src", img)
            //     newImg.attr("alt", "soccer")

            //     // new h4 with class is title
            //     const newH4 = $(`<h4>${title}</h4>`)
            //     newH4.addClass("title")

            //     // new p with class is channel-title
            //     const newP1 = $(`<p>${channelTitle}</p>`)
            //     newP1.addClass("channel-title")

            //     // new p with class is publish-time
            //     const newP2 = $(`<p>${publishTime}</p>`)
            //     newP2.addClass("publish-time")

            //     container.append(videoContainer)
            //     videoContainer.append(newDiv)
            //     newDiv.append(newImg, newH4, newP1, newP2)
                 
            //  })
      
            
    
    }
    
})




