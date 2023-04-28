let streak_text = document.getElementById("streak_text");
let streak_date = document.getElementById("streak_date");
interface streak {
  id: number;
  streak_text: string;
  streak_date: string;
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
       <h1>${streaker.streak_text}</h1>

       <h2>Its been ${streaker.streak_date}days</h2>
     </div>
  
       `;
    });
    const app = document.querySelector(".streak-content")! as HTMLDivElement;
    app.innerHTML = html;
  }

  async addStreak() {
    const newStreak = readValues();
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
let streak = new Streake();

const btn = document.querySelector("#btn");

btn?.addEventListener("click", streak.addStreak);

function readValues() {
  let streak_text = (
    document.querySelector("#streak_text")! as HTMLInputElement
  ).value;
  let streak_date = (
    document.querySelector("#streak_date")! as HTMLInputElement
  ).value;
  return { streak_text, streak_date };
}
