export type DrillData = {
    slug: string;
    title: string;
    category: string;
    duration: string;
    videoUrl: string;
    clubBadge: string;
    difficulty: string;
    faultsFixed: string[];
    diagnosis: {
        condition: string;
        symptoms: string[];
        faceVsPath: string;
    };
    whyItWorks: string[];
    steps: string[];
    checkpoints: string[];
    mistakes: string[];
    progression: { level: string; task: string }[];
    contraindications: string[];
    prescription: string[];
};

export const DRILLS: Record<string, DrillData> = {
    "pump-drill": {
        slug: "pump-drill",
        title: "Pump Drill",
        category: "Path",
        duration: "10 min",
        videoUrl: "/videos/pump-drill.mp4",
        clubBadge: "Driver / Irons",
        difficulty: "Intermediate",
        faultsFixed: ["Slice", "Over-the-top", "Steep Downswing"],
        diagnosis: {
            condition: "This drill is best if your ball:",
            symptoms: [
                "Starts left and curves right (Slice)",
                "Feels steep or 'choppy' from the top",
                "Spins too much with driver (ballooning)",
            ],
            faceVsPath: "Ideally, your path should be inside-out for a draw. A slice happens when the club moves outside-in across the ball with an open face.",
        },
        whyItWorks: [
            "By pausing halfway down, you kill the momentum that usually throws the club 'over the top'.",
            "It forces you to initiate the downswing with your lower body while keeping your back to the target.",
            "The 'pump' sensation actively shallows the shaft, retraining your brain to feel the club head dropping behind your hands.",
        ],
        steps: [
            "Set up normally to the ball.",
            "Swing to the top (P4) and pause.",
            "Pump the club halfway down to 'P5' (lead arm parallel). Feel the club head stay behind your hands.",
            "Return to the top.",
            "Pump down again.",
            "On the third time, swing through fully to the finish.",
        ],
        checkpoints: ["Keep your back to the target during the pumps.", "Ideally, miss the ball to the RIGHT relative to your target line."],
        mistakes: ["Using only arms to pump (hips must bump).", "Opening the shoulders too early."],
        progression: [
            { level: "Beginner", task: "Slow motion rehearsals without a ball." },
            { level: "Intermediate", task: "Hit balls at 50% speed." },
            { level: "Advanced", task: "Full speed, random targets." },
        ],
        contraindications: ["Do not use this drill if your miss is a HOOK or Push-Draw. This will make it worse."],
        prescription: [
            "10 reps without ball (feel the move)",
            "10 half shots (focus on contact)",
            "10 full shots (commit to the feeling)",
        ],
    },
    "wall-drill": {
        slug: "wall-drill",
        title: "The Wall Drill",
        category: "Depth",
        duration: "5 min",
        videoUrl: "/videos/wall-drill.mp4",
        clubBadge: "Irons",
        difficulty: "Beginner",
        faultsFixed: ["Early Extension", "Loss of Posture", "Hips Moving Toward Ball"],
        diagnosis: {
            condition: "This drill is best if your ball:",
            symptoms: [
                "Blocks to the right or thin shots",
                "You feel 'crowded' or stuck at impact",
                "Your hips thrust toward the ball (Early Extension)",
            ],
            faceVsPath: "When hips move toward the ball, you lose space for your arms, forcing you to stand up and flip the club.",
        },
        whyItWorks: [
            "It gives you instant tactile feedback (your glutes leaving the wall) when you early extend.",
            "It forces proper hip rotation and depth, creating space for your arms to swing through.",
        ],
        steps: [
            "Stand with your back 1 inch away from a wall (without a club).",
            "Get into your golf posture. Your glutes should lightly touch the wall.",
            "Make a backswing. Your TRAIL glute should slide along the wall.",
            "Start the downswing. Your LEAD glute should replace the trail glute on the wall.",
            "Keep contact with the wall through impact.",
        ],
        checkpoints: ["Glutes stay on wall entire time.", "Chest stays down (don't stand up)."],
        mistakes: ["Moving away from the wall.", "Sliding hips laterally instead of rotating."],
        progression: [
            { level: "b", task: "Without club (arms crossed)." },
            { level: "i", task: "With club (slow motion)." },
            { level: "a", task: "Full speed swings (no ball)." },
        ],
        contraindications: ["If you struggle with sliding/swaying too much, focus on stability first."],
        prescription: [
            "3 sets of 10 reps (no club)",
            "Do this before every range session to wake up the glutes.",
        ],
    },
    "split-grip": {
        slug: "split-grip",
        title: "Split Grip Drill",
        category: "Release",
        duration: "3 min",
        videoUrl: "/videos/split-grip.mp4",
        clubBadge: "Irons / Driver",
        difficulty: "Beginner",
        faultsFixed: ["Casting", "Chicken Wing", "Slice"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Struggle to square the face (chronic slice)",
                "Have a 'chicken wing' follow through",
                "Lack clubhead speed",
            ],
            faceVsPath: "Proper release allows the toe of the club to pass the heel, squaring the face naturally without manipulation.",
        },
        whyItWorks: [
            "Splitting your hands increases leverage, making it easier to feel the clubhead's weight.",
            "It promotes proper forearm rotation (supination) through impact.",
            "It prevents the lead elbow from flying out (chicken wing).",
        ],
        steps: [
            "Take your normal grip, then slide your trail hand down about 3-4 inches.",
            "Make half swings (waist to waist).",
            "Feel the trail arm extending over the lead arm through impact.",
            "The toe of the club should point up to the sky in the follow-through.",
        ],
        checkpoints: ["Trail arm straight through impact.", "Toe up to toe up."],
        mistakes: ["Gripping too tight.", "Trying to scoop the ball."],
        progression: [
            { level: "b", task: "Practice swings only." },
            { level: "i", task: "Hit balls off a tee." },
            { level: "a", task: "Full shots." },
        ],
        contraindications: ["If you hook the ball, this drill might promote too much face rotation."],
        prescription: [
            "10 reps practice swings",
            "Hit 5 balls with split grip",
            "Hit 5 balls normal grip",
        ],
    },
};

export const getDrillData = (slug: string) => DRILLS[slug] || null;
export const getAllDrills = () => Object.values(DRILLS);
