const express = require('express');
const app = express();
const PORT = 3000;

// Video data (as an example, you can expand this to include more fields)
const videos = [
    {
        category: "Relaxing", // 
        videos: [
            {
                title: "Calming Kaleidoscope",
                url: "https://example.com/calming-kaleidoscope.mp4", // Replace with actual video URL
                thumbnail: "https://example.com/kaleidoscope-thumbnail.jpg" // Replace with actual thumbnail URL
            },
            // You can add more videos within this category if needed
        ]
    },
    // Other categories and videos can be added as needed
];


// Define a route to serve video data
app.get('/videos', (req, res) => {
    res.json(videos);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
