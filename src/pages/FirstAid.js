import "../styles/FirstAid.css";

function FirstAid() {
  return (
    <div className="first-aid-container">
      <h1>🩹 First Aid for Snake Bites</h1>

      <div className="first-aid-boxes">
        {/* Box 1 */}
        <div className="first-aid-box">
          <h3>🐍 Identifying a Snake Bite</h3>
          <ul>
            <li>Look for two fang marks at the site of the bite. This is a key indicator of a venomous snake bite.</li>
            <li>Observe for swelling around the bite area, which is common and may worsen over time.</li>
            <li>The victim may feel pain, dizziness, or nausea—signs that the venom is affecting their body.</li>
            <li>If the victim experiences trouble breathing, get medical help immediately as this could indicate severe venom effects.</li>
          </ul>
          <iframe 
            src="https://www.youtube.com/embed/t2MhosrBu_U" 
            title="Identifying a Snake Bite"
            allowFullScreen
          ></iframe>
        </div>

        {/* Box 2 */}
        <div className="first-aid-box">
          <h3>🚫 What NOT to Do</h3>
          <ul>
            <li>Do NOT try to suck out the venom. This can spread the venom further into the body and make things worse.</li>
            <li>Do NOT cut the bite area. Cutting the wound can increase bleeding and introduce infection.</li>
            <li>Do NOT apply ice or tourniquets. These methods can hinder blood circulation and do more harm than good.</li>
            <li>Avoid giving the victim alcohol or caffeine, as it can speed up the venom's effects on the body.</li>
          </ul>
          <iframe 
            src="https://www.youtube.com/embed/m5IiQufUrnk" 
            title="What NOT to Do"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Scroll down indicator (between top and bottom boxes) */}
      <div className="scroll-indicator">Scroll Down for More⬇️</div>

      <div className="first-aid-boxes">
        {/* Box 3 */}
        <div className="first-aid-box">
          <h3>✅ Immediate First Aid</h3>
          <ul>
            <li>Keep the victim still. Moving too much can increase the spread of venom through the bloodstream.</li>
            <li>Try to keep the affected limb lower than the victim’s heart. This helps slow down the spread of the venom.</li>
            <li>Wrap a bandage loosely above the bite, but don't make it too tight, as that can cut off circulation.</li>
            <li>Remove any tight jewelry, watches, or clothes around the bite site, as these can restrict blood flow.</li>
            <li>If the victim starts showing signs of shock (e.g., pale skin, rapid breathing), keep them warm and calm while awaiting medical help.</li>
          </ul>
          <iframe 
            src="https://www.youtube.com/embed/nH8o-bgwo_g" 
            title="Immediate First Aid"
            allowFullScreen
          ></iframe>
        </div>

        {/* Box 4 */}
        <div className="first-aid-box">
          <h3>🚑 Seeking Medical Help</h3>
          <ul>
            <li>Get the victim to a hospital as soon as possible. The quicker they receive antivenom, the better their chances of survival.</li>
            <li>Try to remember the color and shape of the snake, as this can help doctors determine the right treatment.</li>
            <li>If you can, take a photo of the snake from a safe distance (without risking getting bitten) to help with identification.</li>
          </ul>
          <iframe 
            src="https://www.youtube.com/embed/KgVViwokRJc" 
            title="Seeking Medical Help"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FirstAid;
