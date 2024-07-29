
        document.addEventListener('DOMContentLoaded', function() {
            const tips = [
                "Turn off the tap while brushing your teeth to save up to 8 gallons of water a day.",
                "Fix leaky faucets and pipes to prevent water waste.",
                "Use a broom instead of a hose to clean driveways and sidewalks.",
                "Collect rainwater for watering plants and gardens.",
                "Install a low-flow showerhead to reduce water usage during showers.",
                "Water your lawn in the early morning or late evening to minimize evaporation.",
                "Use a dishwasher only when it's fully loaded to save water and energy.",
                "Opt for native plants in your garden that require less water to thrive.",
                "Take shorter showers to reduce water consumption.",
                "Use a bucket to catch water while waiting for it to warm up and use it to water plants."
            ];
    
            const today = new Date();
            const tipIndex = today.getDate() % tips.length;
            document.getElementById('tip-text').textContent = tips[tipIndex];
        });
    