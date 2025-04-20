"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const sunSignData = {
  Aries: {
    retardType: "The Headbutting Retard",
    description:
      "This is the type of retard who will wake up at 5 AM to fight their own reflection in the mirror because it looked at them wrong. They once tried to microwave a metal bowl because 'it would heat up faster,' then argued with the fire department about how it was actually the microwave's fault.\n\nThey've been known to challenge statues to staring contests and get genuinely angry when they lose. The Headbutting Retard's solution to any problem is to either charge at it full speed or set it on fire, sometimes both simultaneously. Their Google search history includes gems like 'how to fight a hurricane' and 'is lava just spicy water?'",
  },
  Taurus: {
    retardType: "The Immovable Retard",
    description:
      "This particular breed of retard has been wearing the same underwear for 3 days because 'it still feels clean.' They will argue for 45 minutes about a $2 price difference while holding up an entire checkout line. If you try to tell them they're wrong, they'll just plant their feet deeper and cross their arms harder.\n\nThe Immovable Retard has a special talent for falling asleep in inappropriate places like business meetings or while operating heavy machinery. They've been collecting the same useless items since childhood and will fight to the death if you suggest getting rid of their precious collection of Taco Bell sauce packets from 2007.",
  },
  Gemini: {
    retardType: "The Multiple Personality Retard",
    description:
      "This retard will tell you they're vegan while eating a chicken sandwich, then genuinely wonder why you're confused. They've been known to have full arguments with themselves and lose both sides. Their attention span is so short that they've walked into a room and forgotten why, while actively carrying the item they went to retrieve.\n\nThe Multiple Personality Retard will text you 47 times in a row with completely unrelated thoughts, then ghost you for weeks because they 'needed space.' They start new hobbies every 6.2 days, each time declaring 'this is my true passion' before abandoning it entirely. They once bought equipment for deep sea diving while living in Nebraska.",
  },
  Cancer: {
    retardType: "The Emotional Wreck Retard",
    description:
      "This is the retard who cries when the toast lands butter-side down because it 'looked so sad.' They've created elaborate backstories for every inanimate object they own and refuse to throw away a broken pencil because 'we've been through so much together.' Their emotional support water bottle has its own Instagram account.\n\nThe Emotional Wreck Retard remembers exactly what you said to them on February 12, 2014, at 3:47 PM, and is still holding it against you. They've been known to adopt every stray animal within a 10-mile radius and then wonder why their house smells like a zoo. Will absolutely body-slam anyone who says something mean about their favorite TV character.",
  },
  Leo: {
    retardType: "The Main Character Retard",
    description:
      "This retard genuinely believes that everyone in the grocery store is staring at them in admiration, when in reality people are wondering why someone is doing a catwalk down the cereal aisle. They practice acceptance speeches in the shower for awards they haven't been nominated for and likely never will be. Their dating profile includes the phrase 'probably the best person you'll ever meet.'\n\nThe Main Character Retard has thrown a tantrum in public because someone else was wearing the same shirt, completely ruining their 'unique aesthetic.' They've purchased a ring light for Zoom meetings with their accountant and refer to themselves in the third person unironically. They once called 911 because their phone's front camera suddenly switched to the back camera and they thought someone was filming them.",
  },
  Virgo: {
    retardType: "The Anal-Retentive Retard",
    description:
      "This special breed of retard alphabetizes their spice rack, color-codes their underwear drawer, and has a spreadsheet tracking their bowel movements since 2017. They've been known to correct strangers' grammar in the middle of a robbery. They refuse to sit on public toilets and instead hover above them, frequently falling in as a result.\n\nThe Anal-Retentive Retard once spent 4 hours refolding all the towels at a friend's house because they were 'wrong.' They carry hand sanitizer in 7 different scents and have different ones for different days of the week. They've been banned from Wikipedia for correcting articles with information that's technically correct but absolutely unnecessary. They measure pasta with a digital scale rather than just eyeballing it like a normal person.",
  },
  Libra: {
    retardType: "The Chronically Indecisive Retard",
    description:
      "This retard once stood in front of their closet for so long deciding what to wear that they were late to their own birthday party. They've ordered three different meals at a restaurant because they couldn't decide, then ended up eating none of them. They bought two identical cars in different colors because the decision was too stressful.\n\nThe Chronically Indecisive Retard will spend 45 minutes crafting a text message, delete it all, then just send 'k.' They've been in 17 different friend groups because they can never commit to just one social circle. They once dated two people simultaneously because they couldn't choose which one to break up with, then ended up marrying someone else entirely. Their Netflix 'Continue Watching' list contains 72 shows, all stopped at exactly 7 minutes in.",
  },
  Scorpio: {
    retardType: "The Psychotically Intense Retard",
    description:
      "This particular retard maintains unsettling eye contact for so long during conversations that people check their backs for stab wounds afterward. They've created detailed revenge fantasies for minor inconveniences, like when the barista put two pumps of syrup instead of three. They remember every single thing you've ever said to them and will bring it up at the most inappropriate moments.\n\nThe Psychotically Intense Retard has a conspiracy board about their neighbor who they're convinced is a government spy because they take their trash out at exactly 8 PM every Tuesday. They've been banned from multiple dating apps for asking matches about their childhood trauma within the first three messages. Their idea of 'light reading' is books about serial killers, which they keep prominently displayed in their bathroom.",
  },
  Sagittarius: {
    retardType: "The Wildly Inappropriate Retard",
    description:
      "This is the retard who tells their deeply personal trauma stories as ice-breakers at corporate events. They've been fired from six different jobs for doing things like implementing 'Pants-Optional Fridays' without consulting anyone. They regularly book trips to countries they know nothing about, can't speak the language of, and somehow end up befriending local criminals within hours of landing.\n\nThe Wildly Inappropriate Retard has been banned from three different funeral homes for trying to lighten the mood with horribly timed jokes. Their Instagram is full of 'philosophical' quotes they clearly don't understand but thought sounded deep. They once gave their strict religious grandmother a vibrator for Christmas because 'everyone deserves to feel good' and couldn't understand why family dinner became awkward.",
  },
  Capricorn: {
    retardType: "The Pathologically Responsible Retard",
    description:
      "This retard has never called in sick to work, even that time they had actual pneumonia and infected the entire office. They file their taxes in January and judge everyone who waits until April. They've created a 10-year plan for their houseplant and get genuinely distressed when it doesn't grow according to schedule.\n\nThe Pathologically Responsible Retard has seven different retirement accounts and gets visibly sweaty when people talk about spontaneous purchases. They once created a PowerPoint presentation to convince their partner why they should switch toothpaste brands to save $1.42 per month. They schedule their 'spontaneous fun time' two months in advance and get irritated when other people aren't as prepared for it as they are.",
  },
  Aquarius: {
    retardType: "The Malfunctioning Robot Retard",
    description:
      "This special variety of retard insists they don't care what people think while simultaneously dyeing their hair seven different colors to make sure everyone notices them. They create bizarre 'life hacks' like using mashed potatoes as wallpaper paste and are genuinely confused when it doesn't work. They've tried to pay for groceries with cryptocurrency at a small-town market that barely accepts credit cards.\n\nThe Malfunctioning Robot Retard owns 12 crystals for 'energy clearing' but can't remember to clear their browser history. They start sentences with 'Well, technically...' so often that their friends have a drinking game based on it. They insist they're not following trends while doing exactly what every other contrarian is doing. They once tried to redesign their apartment to 'optimize workflow' and ended up with a toilet in the kitchen.",
  },
  Pisces: {
    retardType: "The Chronically Delusional Retard",
    description:
      "This retard believes they can communicate telepathically with their goldfish and has written an 800-page fantasy novel based on the fish's 'life story.' They regularly call in sick to work because their 'aura was feeling purple today' and that's apparently a bad thing. They've spent their life savings on online psychics who keep telling them their ex will return (spoiler: they won't).\n\nThe Chronically Delusional Retard has a dream journal that they insist contains prophecies, despite the fact that none of their predictions have ever come true. They cry during commercials for cleaning products because they 'felt the mop's struggle.' They've been catfished twelve separate times by the same person because they believe 'love finds a way.' Their medicine cabinet contains essential oils labeled for ailments ranging from 'mild headache' to 'existential dread.'",
  },
};

function getSunSign(month, day) {
  const date = new Date(2000, month - 1, day);

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";

  return "Unknown";
}

// Function to get image path for a sun sign
function getImagePath(sunSign) {
  const imageMap = {
    Aries: "/types/the_headbutting_retard.png",
    Taurus: "/types/the_immovable_retard.png",
    Gemini: "/types/the_multiple_personality_retard.png",
    Cancer: "/types/the_emotional_wreck_retard.png",
    Leo: "/types/the_main_character_retard.png",
    Virgo: "/types/the_anal_retentive_retard.png",
    Libra: "/types/the_chronically_indecisive_retard.png",
    Scorpio: "/types/the_psychologically_intense_retard.png",
    Sagittarius: "/types/the_wildly_inappropriate_retard.png",
    Capricorn: "/types/the_pathologically_responsible_retard.png",
    Aquarius: "/types/the_malfunctioning_robot_retard.png",
    Pisces: "/types/the_chronically_delusional_retard.png",
  };

  return imageMap[sunSign] || "";
}

export default function Home() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      setError("Please select a month");
      return;
    }

    // Check for valid day based on month
    const daysInMonth = new Date(2000, monthNum, 0).getDate();
    if (isNaN(dayNum) || dayNum < 1 || dayNum > daysInMonth) {
      setError(`Please enter a valid day (1-${daysInMonth} for this month)`);
      return;
    }

    // Start loading
    setLoading(true);
    setResult(null);

    // Simulate API call with timeout
    setTimeout(() => {
      const sunSign = getSunSign(monthNum, dayNum);
      setResult({
        birthDate: `${months[monthNum - 1]} ${dayNum}`,
        sunSign,
        ...sunSignData[sunSign],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Retard Types</h1>
        <p className={styles.description}>
          Find out what kind of retard you truly are
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <div className={styles.inputGroup}>
              <label htmlFor="month">Month:</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
                className={styles.select}
              >
                <option value="" disabled>
                  Select Month
                </option>
                {months.map((monthName, index) => (
                  <option key={index} value={index + 1}>
                    {monthName}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="day">Day:</label>
              <input
                type="number"
                id="day"
                min="1"
                max="31"
                placeholder="1-31"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
                className={styles.input}
              />
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Reveal My Retard Type
          </button>
        </form>

        {loading && (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Calculating your retard type...</p>
          </div>
        )}

        {result && (
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <h2 className={styles.retardType}>{result.retardType}</h2>
            </div>

            <div className={styles.resultImage}>
              <Image
                src={getImagePath(result.sunSign)}
                alt={result.retardType}
                width={800}
                height={450}
                className={styles.typeImage}
                priority
              />
            </div>

            <div className={styles.resultContent}>
              {result.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
