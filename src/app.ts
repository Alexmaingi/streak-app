interface streak {
  id: number;
  streakTask: string;
  time: number;
}

class Streake {
  async ShowStreak() {
    const response = await fetch("http://localhost:3000/streak");
    console.log(response);
    const streakes = (await response.json()) as streak[];
    console.log(streakes);

    let html = "";
    streakes.forEach((streaker) => {
      console.log(streaker);
      html += `
       <div class="content-streak" key=${streaker.id}>
       <h1>${streaker.streakTask}</h1>

       <h2>Its been ${streaker.time}days</h2>
     </div>
  
       `;
    });
    const app = document.querySelector(".streak-content")! as HTMLDivElement;
    app.innerHTML = html;
  }

  static async addStreak() {
    // const newPhoto= Photos.readValue()
    // console.log(newPhoto);
    const newStreak = { time: Date, streakTask: String };
    await fetch("http://localhost:3000/streak", {
      method: "POST",
      body: JSON.stringify(newStreak),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
new Streake().ShowStreak();

const btn = document.getElementById("btn")! as HTMLButtonElement;

btn.addEventListener("click", () => {
  if (btn.textContent === "Add strike") {
    console.log("button clicked");
  }
});
