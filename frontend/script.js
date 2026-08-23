const form = document.getElementById("predictionForm");
const result = document.getElementById("result");
const predictionValue = document.getElementById("predictionValue");
const error = document.getElementById("error");
const predictButton = document.getElementById("predictButton");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    result.classList.add("hidden");
    error.classList.add("hidden");
    predictButton.disabled = true;
    predictButton.textContent = "Predicting...";

    const orderDate = document.getElementById("order_date").value;
    const dateParts = orderDate.split("-");

    const formattedDate =
        `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const data = {
        age: Number(document.getElementById("age").value),
        rating: Number(document.getElementById("rating").value),

        restaurant_lat: Number(document.getElementById("restaurant_lat").value),
        restaurant_lon: Number(document.getElementById("restaurant_lon").value),

        delivery_lat: Number(document.getElementById("delivery_lat").value),
        delivery_lon: Number(document.getElementById("delivery_lon").value),

        vehicle_condition: Number(
            document.getElementById("vehicle_condition").value
        ),

        multiple_deliveries: Number(
            document.getElementById("multiple_deliveries").value
        ),

        order_date: formattedDate,

        order_hour: Number(document.getElementById("order_hour").value),
        order_minute: Number(document.getElementById("order_minute").value),

        pickup_hour: Number(document.getElementById("pickup_hour").value),
        pickup_minute: Number(document.getElementById("pickup_minute").value),

        weather: document.getElementById("weather").value,
        traffic: document.getElementById("traffic").value,
        order_type: document.getElementById("order_type").value,
        vehicle: document.getElementById("vehicle").value,
        festival: document.getElementById("festival").value,
        city: document.getElementById("city").value
    };

    try {
        const response = await fetch(
            "https://food-delivery-time-api.onrender.com/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.detail || "Prediction failed."
            );
        }

        predictionValue.textContent =
            Number(responseData.prediction).toFixed(2);

        result.classList.remove("hidden");

    } catch (err) {
        error.textContent = err.message;
        error.classList.remove("hidden");

    } finally {
        predictButton.disabled = false;
        predictButton.textContent = "Predict Delivery Time";
    }
});
