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
    externalLink?: string; // YouTube or Article link
    // --- NORMALIZED TAXONOMY FIELDS ---
    id: string; // DRL-{CATEGORY}-{SUBCATEGORY}-{INTENT}-{VARIANT}
    primaryCategory: "FCE" | "PTH" | "LP" | "AOA" | "STR" | "SEQ" | "WGT" | "TMP" | "SET" | "REL";
    secondaryCategories: string[];
    level: 1 | 2 | 3 | 4 | 5; // 1=Static, 5=Pressure
    fixesFaults: string[]; // FLT-{DOMAIN}-{MECHANISM}-{DIRECTION}
    rootCausePriority: number; // 1.3=Setup, 1.2=Seq, 1.0=Face/Path, 0.8=Strike
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
            "Hit 10 full shots (commit to the feeling)",
        ],
        // Normalized Data
        id: "DRL-PTH-TRANS-SHALLOW-001",
        primaryCategory: "PTH",
        secondaryCategories: ["SEQ"],
        level: 4,
        fixesFaults: ["FLT-PTH-SLICE", "FLT-SEQ-OVER_TOP"],
        rootCausePriority: 1.0
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
        // Normalized Data
        id: "DRL-SEQ-POSTURE-STAY-001",
        primaryCategory: "SEQ",
        secondaryCategories: ["STR"],
        level: 1,
        fixesFaults: ["FLT-SEQ-EARLY_EXT", "FLT-STR-HEEL"],
        rootCausePriority: 1.3
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
        // Normalized Data
        id: "DRL-REL-IMP-SQUARE-001",
        primaryCategory: "REL",
        secondaryCategories: ["SEQ"],
        level: 1,
        fixesFaults: ["FLT-REL-CAST", "FLT-SEQ-CHICKEN_WING"],
        rootCausePriority: 1.0
    },
    "towel-drill": {
        slug: "towel-drill",
        title: "Towel Drill",
        category: "Connection",
        duration: "10 min",
        videoUrl: "/videos/towel-drill.mp4",
        clubBadge: "Irons / Wedges",
        difficulty: "Beginner",
        faultsFixed: ["Chicken Wing", "Disconnect", "Inconsistent Contact"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Hit shots off the toe",
                "Arms fly away from body in backswing",
                "Lack power despite swinging hard",
            ],
            faceVsPath: "Disconnection often leads to an unstable path and face variability.",
        },
        whyItWorks: [
            "Keeps the arms connected to the torso, ensuring the big muscles control the swing.",
            "Prevents the lead arm from lifting too high or the trail elbow flying out.",
        ],
        steps: [
            "Place a towel across your chest, under both armpits.",
            "Make half swings (9-to-3) without dropping the towel.",
            "Feel your chest driving the rotation back and through.",
        ],
        checkpoints: ["Towel stays under both armpits.", "Finish with chest facing target."],
        mistakes: ["Using too long of a towel.", "Trying to make full swings immediately."],
        progression: [
            { level: "b", task: "Pitch shots with towel." },
            { level: "i", task: "Full iron shots (towel under armpits)." },
            { level: "a", task: "Driver (towel only under trail arm)." },
        ],
        contraindications: ["If you have very limited flexibility, use a smaller towel or just one armpit."],
        prescription: ["20 balls with 7-iron.", "Focus on body rotation."],
        // Normalized Data
        id: "DRL-SEQ-CONN-TOWEL-001",
        primaryCategory: "SEQ",
        secondaryCategories: ["WGT"],
        level: 3,
        fixesFaults: ["FLT-SEQ-DISCONNECT", "FLT-SEQ-CHICKEN_WING"],
        rootCausePriority: 1.2
    },
    "l-to-l": {
        slug: "l-to-l",
        title: "L-to-L Drill",
        category: "Hinge",
        duration: "5 min",
        videoUrl: "/videos/l-to-l.mp4",
        clubBadge: "Wedges / Short Irons",
        difficulty: "Beginner",
        faultsFixed: ["No Hinge", "Casting", "Poor Timing"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Struggle with contact on pitch shots",
                "Have no wrist set in backswing",
                "Feel 'wooden' or stiff",
            ],
            faceVsPath: "Proper hinge sets the radius of the swing, crucial for consistent low-point control.",
        },
        whyItWorks: [
            "Teaches the correct wrist hinge mechanism.",
            "Synchronizes the arms and body.",
        ],
        steps: [
            "Swing back until lead arm and shaft form an 'L'.",
            "Swing through until trail arm and shaft form an 'L'.",
            "Focus on the rhythm: 'Hinge, Turn, Hinge'.",
        ],
        checkpoints: ["Thumbs point up at L positions.", "Butt of grip points at ball equivalent."],
        mistakes: ["Using only wrists (no body turn).", "Stopping at impact."],
        progression: [
            { level: "b", task: "Practice swings." },
            { level: "i", task: "Hit 50 yard pitch shots." },
            { level: "a", task: "Hit full 9-irons." },
        ],
        contraindications: ["None. Good for everyone."],
        prescription: ["15 balls warm up."],
        // Normalized Data
        id: "DRL-REL-HINGE-L2L-001",
        primaryCategory: "REL",
        secondaryCategories: ["TMP"],
        level: 2,
        fixesFaults: ["FLT-REL-NO_HINGE", "FLT-REL-CAST"],
        rootCausePriority: 1.0
    },
    "feet-together": {
        slug: "feet-together",
        title: "Feet Together",
        category: "Balance",
        duration: "5 min",
        videoUrl: "/videos/feet-together.mp4",
        clubBadge: "Irons",
        difficulty: "Intermediate",
        faultsFixed: ["Swaying", "Poor Balance", "Sliding"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Fall off balance during swing",
                "Hit lots of fat or thin shots",
                "Slide hips too much laterally",
            ],
            faceVsPath: "Swaying moves the low point of the arc, causing contact issues.",
        },
        whyItWorks: [
            "Removes the ability to sway.",
            "Forces you to rotate around a centered axis.",
            "Improves tempo and rhythm.",
        ],
        steps: [
            "Place feet completely together (touching).",
            "Hit 7-irons at 75% speed.",
            "Focus on staying perfectly centered.",
        ],
        checkpoints: ["Hold finish for 3 seconds.", "No falling over."],
        mistakes: ["Swinging too hard.", "Letting feet come apart."],
        progression: [
            { level: "b", task: "Short chips." },
            { level: "i", task: "Full irons." },
            { level: "a", task: "Driver (very hard)." },
        ],
        contraindications: ["Balance issues."],
        prescription: ["10 balls at start of session."],
        // Normalized Data
        id: "DRL-WGT-BALANCE-FEET-001",
        primaryCategory: "WGT",
        secondaryCategories: ["SEQ"],
        level: 4,
        fixesFaults: ["FLT-WGT-SWAY", "FLT-WGT-SLIDE"],
        rootCausePriority: 1.3
    },
    "impact-bag": {
        slug: "impact-bag",
        title: "Impact Bag",
        category: "Impact",
        duration: "5 min",
        videoUrl: "/videos/impact-bag.mp4",
        clubBadge: "Irons",
        difficulty: "Beginner",
        faultsFixed: ["Scooping", "Weak Impact", "Chicken Wing"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Hit high weak shots",
                "Scoop the ball at impact",
                "Lack compression",
            ],
            faceVsPath: "Impact is the moment of truth. This improves shaft lean."
        },
        whyItWorks: [
            "Provides physical resistance to train shaft lean.",
            "Stops the flip (scoop) instantly.",
        ],
        steps: [
            "Set up to impact bag (or old pillow).",
            "Swing into bag, stopping at impact.",
            "Check that hands are ahead of clubhead.",
        ],
        checkpoints: ["Lead wrist flat.", "Shaft leaning forward."],
        mistakes: ["Hitting bag too hard.", "Stopping body rotation."],
        progression: [
            { level: "b", task: "Static press into bag." },
            { level: "i", task: "Half speed impacts." },
            { level: "a", task: "Full speed." },
        ],
        contraindications: ["Wrist injury."],
        prescription: ["10 whacks before hitting balls."],
        // Normalized Data
        id: "DRL-LP-IMP-BAG-001",
        primaryCategory: "LP",
        secondaryCategories: ["AOA"],
        level: 4,
        fixesFaults: ["FLT-LP-SCOOP", "FLT-AOA-NEG"],
        rootCausePriority: 0.8
    },
    "gate-drill": {
        slug: "gate-drill",
        title: "Gate Drill",
        category: "Contact",
        duration: "5 min",
        videoUrl: "/videos/gate-drill.mp4",
        clubBadge: "Putter",
        difficulty: "Advanced",
        faultsFixed: ["Heel/Toe Strikes", "Push/Pull Putts"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Miss short putts",
                "Speed control is inconsistent",
            ],
            faceVsPath: "Center contact is king in putting."
        },
        whyItWorks: [
            "Immediate feedback on face strike.",
            "Forces a pure path.",
        ],
        steps: [
            "Place two tees slightly wider than putter head.",
            "Place ball in middle.",
            "Stroke putt without hitting tees.",
        ],
        checkpoints: ["Putter passes cleanly.", "Ball rolls end over end."],
        mistakes: ["Tees too wide (too easy)."],
        progression: [
            { level: "b", task: "Wide gate." },
            { level: "i", task: "Narrow gate." },
            { level: "a", task: "One hand only." },
        ],
        contraindications: ["None."],
        prescription: ["20 made putts in a row."],
        // Normalized Data
        id: "DRL-STR-PUTT-GATE-002", // Renamed from gate-putting to avoid conflict
        primaryCategory: "STR",
        secondaryCategories: ["PTH"],
        level: 4,
        fixesFaults: ["FLT-STR-TOE", "FLT-STR-HEEL"],
        rootCausePriority: 0.8
    },
    "tempo-beats": {
        slug: "tempo-beats",
        title: "Tempo Beats",
        category: "Tempo",
        duration: "Any",
        videoUrl: "/videos/tempo-beats.mp4",
        clubBadge: "Driver",
        difficulty: "Intermediate",
        faultsFixed: ["Rushing", "Jurky Transition"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: [
                "Get quick from the top",
                "Lose rhythm under pressure",
            ],
            faceVsPath: "Tempo glues the mechanics together."
        },
        whyItWorks: [
            "Engrains a 3:1 tempo ratio (Tour standard).",
            "Calms the transition.",
        ],
        steps: [
            "Download a metronome app (set 3:1 mode or BPM).",
            "Swing back on '1'.",
            "Impact on '3'.",
        ],
        checkpoints: ["Smooth transition.", "Solid contact."],
        mistakes: ["Fighting the beat."],
        progression: [
            { level: "b", task: "Practice swings." },
            { level: "i", task: "Hitting balls." },
        ],
        contraindications: ["None."],
        prescription: ["Entire range session."],
        // Normalized Data
        id: "DRL-TMP-RHYTHM-BEATS-001",
        primaryCategory: "TMP",
        secondaryCategories: ["SEQ"],
        level: 3,
        fixesFaults: ["FLT-TMP-RUSH", "FLT-TMP-JERKY"],
        rootCausePriority: 1.2
    },
    // --- NEW MASTER SYSTEM DRILLS ---
    "split-hand-drill": {
        slug: "split-hand-drill",
        title: "Split-Hand Drill",
        category: "Sequencing",
        duration: "5 min",
        videoUrl: "/videos/split-hand.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Split+Hand+Golf+Drill",
        clubBadge: "Driver / Irons",
        difficulty: "Intermediate",
        faultsFixed: ["Face Closed", "Stuck/Blocked", "Chicken Wing"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Hook the ball dangerously", "Feel 'stuck' or blocked on downswing", "Have a closed face at the top"],
            faceVsPath: "Separating hands encourages the lead arm to fold correctly and prevents the face from shutting down."
        },
        whyItWorks: [
            "Increases leverage to feel the clubhead's true position.",
            "Prevents the lead arm from dominating (pulling) the swing.",
            "Forces proper re-hinging after impact."
        ],
        steps: [
            "Take your normal grip.",
            "Slide your trail hand down the grip (split hands by 6 inches).",
            "Make 3/4 swings feeling the trail arm push the club wide.",
            "Check that the face is square (toe up) at waist high."
        ],
        checkpoints: ["Trail arm extends fully post-impact.", "Face stays square, not shut."],
        mistakes: ["Splitting hands too far (like a hockey stick).", "Swinging too fast."],
        progression: [
            { level: "b", task: "Practice swings only." },
            { level: "i", task: "Hit balls off tee (7-iron)." },
            { level: "a", task: "Driver practice swings." }
        ],
        contraindications: ["If you slice due to an OPEN face, this might not be the primary fix (use Release drills)."],
        prescription: ["10 reps before every driver session."],
        // Normalized Data
        id: "DRL-SEQ-TRANS-UNSTICK-001",
        primaryCategory: "SEQ",
        secondaryCategories: ["FCE"],
        level: 3,
        fixesFaults: ["FLT-SEQ-STUCK-BLOCK", "FLT-FCE-CLOSED"],
        rootCausePriority: 1.2
    },
    "toe-up-drill": {
        slug: "toe-up-drill",
        title: "Toe-Up to Toe-Up",
        category: "Face Control",
        duration: "5 min",
        videoUrl: "/videos/toe-up.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Toe+Up+to+Toe+Up+Golf+Drill",
        clubBadge: "Irons",
        difficulty: "Beginner",
        faultsFixed: ["Slice", "Hook", "Face Control"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Have no idea where the face is pointing", "Hit wild curves (both ways)", "Have very 'quiet' hands (too stiff)"],
            faceVsPath: "The golf swing is an arc. The toe must rotate open and closed relative to the arc."
        },
        whyItWorks: [
            "Simplifies the swing to just the release pattern.",
            "Teaches you to rotate the forearms naturally.",
            "Synchronizes the body pivot with arm rotation."
        ],
        steps: [
            "Take a narrow stance (feet together).",
            "Swing back to waist high -> Toe of club points UP to sky.",
            "Swing through to waist high -> Toe of club points UP to sky."
        ],
        checkpoints: ["Toe points vertical at P3 and P9.", "Elbows stay close to ribs."],
        mistakes: ["Flipping wrists instead of rotating arms.", " swaying."],
        progression: [
            { level: "b", task: "Waist to waist swings." },
            { level: "i", task: "Shoulder to shoulder." },
            { level: "a", task: "Full speed." }
        ],
        contraindications: ["None. The most fundamental drill in golf."],
        prescription: ["20 balls warm-up every session."],
        // Normalized Data
        id: "DRL-FCE-REL-SQUARE-001",
        primaryCategory: "FCE",
        secondaryCategories: ["REL"],
        level: 2,
        fixesFaults: ["FLT-FCE-OPEN", "FLT-FCE-CLOSED"],
        rootCausePriority: 1.0
    },
    "step-through-drill": {
        slug: "step-through-drill",
        title: "Step-Through Drill",
        category: "Weight Shift",
        duration: "5 min",
        videoUrl: "/videos/step-through.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Gary+Player+Step+Through+Drill",
        clubBadge: "Driver / Irons",
        difficulty: "Intermediate",
        faultsFixed: ["Hanging Back", "Fat Shots", "Loss of Power"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Hit fat shots (ground first)", "Finish with weight on back foot", "Lack clubhead speed"],
            faceVsPath: "Low point control requires weight to be forward at impact."
        },
        whyItWorks: [
            "Physically forces your weight to the lead side.",
            "Prevents 'hanging back' (the cause of fat shots).",
            "Generates ground force momentum."
        ],
        steps: [
            "Set up normally.",
            "Swing to the top.",
            "As you start down, dynamic weight shift forward.",
            "After impact, literally step your trail foot forward towards the target (like walking)."
        ],
        checkpoints: ["Belly button faces target.", "Trail foot passes lead foot in finish."],
        mistakes: ["Stepping too early (before impact).", "Falling backward."],
        progression: [
            { level: "b", task: "Practice swings carrying momentum." },
            { level: "i", task: "Hit balls (7-iron)." },
            { level: "a", task: "Driver (The 'Gary Player')." }
        ],
        contraindications: ["Bad balance or knee issues."],
        prescription: ["5 swings to feel the flow."],
        // Normalized Data
        id: "DRL-WGT-TRANS-FWD-001",
        primaryCategory: "WGT",
        secondaryCategories: ["LP"],
        level: 4,
        fixesFaults: ["FLT-WGT-HANG_BACK", "FLT-LP-BEHIND"],
        rootCausePriority: 1.3
    },
    "chair-drill": {
        slug: "chair-drill",
        title: "Chair Drill",
        category: "Posture",
        duration: "10 min",
        videoUrl: "/videos/chair-drill.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Golf+Chair+Drill+Early+Extension",
        clubBadge: "Home Drill",
        difficulty: "Beginner",
        faultsFixed: ["Early Extension", "Loss of Posture", "Heel Strikes"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Thrust hips toward ball", "Stand up out of posture", "Shank or heel strike"],
            faceVsPath: "If hips invade the arm space, you must flip to make contact."
        },
        whyItWorks: [
            "Provides tactile feedback on hip depth.",
            "If you leave the chair, you know you've early extended."
        ],
        steps: [
            "Place a chair (or wall) behind you, touching your glutes.",
            "Take your backswing: Trail glute pushes into chair.",
            "Downswing: Rotate so LEAD glute pushes into chair.",
            "Do not let your hips lose contact with the chair."
        ],
        checkpoints: ["Constant contact with chair.", "Chest stays down."],
        mistakes: ["Sliding sideways along chair instead of rotating."],
        progression: [
            { level: "b", task: "No club, arms crossed." },
            { level: "i", task: "With club / slow motion." },
            { level: "a", task: "Full speed." }
        ],
        contraindications: ["None."],
        prescription: ["50 reps at home watching TV."],
        // Normalized Data
        id: "DRL-SEQ-POSTURE-STAY-001",
        primaryCategory: "SEQ",
        secondaryCategories: ["STR"],
        level: 1,
        fixesFaults: ["FLT-SEQ-EARLY_EXT", "FLT-STR-HEEL"],
        rootCausePriority: 1.3
    },
    "towel-behind-ball": {
        slug: "towel-behind-ball",
        title: "Towel Behind Ball",
        category: "Low Point",
        duration: "5 min",
        videoUrl: "/videos/towel-lowpoint.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Towel+Behind+Ball+Drill",
        clubBadge: "Irons",
        difficulty: "Advanced",
        faultsFixed: ["Fat Shots", "Chunking", "Casting"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Hit the ground before the ball (Chunk)", "Lack compression", "Are afraid of tight lies"],
            faceVsPath: "Low point must be AFTER the ball for iron shots."
        },
        whyItWorks: [
            "High stakes feedback: If you cast or hang back, you hit the towel.",
            "Forces a steep enough angle of attack to miss the obstacle."
        ],
        steps: [
            "Lay a towel flat on the ground 4-6 inches behind your ball.",
            "Hit the ball without touching the towel.",
            "If you hit the towel, you casted or swayed back."
        ],
        checkpoints: ["Towel remains undisturbed.", "Divot starts after the ball."],
        mistakes: ["Placing towel too close initially (start 6 inches back)."],
        progression: [
            { level: "b", task: "Small chips." },
            { level: "i", task: "Full pitching wedge." },
            { level: "a", task: "Long irons (very hard)." }
        ],
        contraindications: ["Do not use with Driver."],
        prescription: ["Use for entire practice session if you are a 'digger'."],
        // Normalized Data
        id: "DRL-LP-IMP-FWD-001",
        primaryCategory: "LP",
        secondaryCategories: ["AOA"],
        level: 4,
        fixesFaults: ["FLT-LP-BEHIND", "FLT-AOA-NEG"],
        rootCausePriority: 0.8
    },
    // --- LEVEL 9-18 EXPANSION DRILLS ---
    "roll-release-drill": {
        slug: "roll-release-drill",
        title: "Roll-Release Drill",
        category: "Release",
        duration: "5 min",
        videoUrl: "/videos/roll-release.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Roll+Release+Golf+Drill",
        clubBadge: "Irons",
        difficulty: "Beginner",
        faultsFixed: ["Blocks", "Weak Fades", "Slice"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Hit weak shots to the right", "Have a 'chicken wing' finish", "Lack clubhead speed"],
            faceVsPath: "If the face doesn't rotate square, you must swing left to compensate (slice path)."
        },
        whyItWorks: [
            "Teaches the feeling of the forearms rotating over each other.",
            "Visualises the release using a toilet paper roll (optional aid).",
            "Promotes a full, free release."
        ],
        steps: [
            "Slide a toilet paper roll down the shaft to the head.",
            "Swing back and through.",
            "Try to keep the roll at the bottom by maintaining centrifugal force.",
            "Feel the forearms cross over in the follow through."
        ],
        checkpoints: ["Right arm crosses over left arm.", "Finish with high hands."],
        mistakes: ["Holding on too tight.", "Stopping the body rotation."],
        progression: [
            { level: "b", task: "Practice swings." },
            { level: "i", task: "Hit balls intending to hook." },
        ],
        contraindications: ["If you already hook the ball, avoid this."],
        prescription: ["10 reps feeling the 'roll'."],
        // Normalized Data
        id: "DRL-REL-IMP-ROLL-001",
        primaryCategory: "REL",
        secondaryCategories: ["FCE"],
        level: 2,
        fixesFaults: ["FLT-FCE-OPEN", "FLT-REL-BLOCK"],
        rootCausePriority: 1.0
    },
    "headcover-takeaway": {
        slug: "headcover-takeaway",
        title: "Headcover Takeaway",
        category: "Takeaway",
        duration: "3 min",
        videoUrl: "/videos/headcover-takeaway.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Headcover+Behind+Hands+Takeway+Drill",
        clubBadge: "Driver / Irons",
        difficulty: "Beginner",
        faultsFixed: ["Inside Takeaway", "Snap Hooks", "Blocks"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Whip the club inside effectively", "Hit hooks or blocks", "Feel 'stuck' coming down"],
            faceVsPath: "An inside takeaway often leads to an 'over the top' correction or stuck downswing."
        },
        whyItWorks: [
            "Forces a wide, one-piece takeaway.",
            "Prevents hands from rolling the face open early.",
            "Keeps the club in front of the chest."
        ],
        steps: [
            "Place a headcover 18 inches behind your ball on the target line.",
            "Start your backswing by dragging the club back LOW.",
            "Push the headcover straight back (not inside).",
        ],
        checkpoints: ["Headcover moves straight back.", "Clubface stays looking at ball."],
        mistakes: ["Lifting the club over the cover.", "Rolling wrists immediately."],
        progression: [
            { level: "b", task: "Push headcover back." },
            { level: "i", task: "Hit ball after pushing back." },
        ],
        contraindications: ["None. Good for all."],
        prescription: ["5 reps before hitting."],
        // Normalized Data
        id: "DRL-PTH-TAKE-WIDE-001",
        primaryCategory: "PTH",
        secondaryCategories: ["SEQ"],
        level: 1,
        fixesFaults: ["FLT-PTH-INSIDE_TAKEAWAY"],
        rootCausePriority: 1.3
    },
    "arm-sync-drill": {
        slug: "arm-sync-drill",
        title: "Arm Sync Drill",
        category: "Sequencing",
        duration: "5 min",
        videoUrl: "/videos/arm-sync.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Golf+Arm+Swing+Synchronization+Drill",
        clubBadge: "Driver / Irons",
        difficulty: "Intermediate",
        faultsFixed: ["Overswing", "Loss of Control", "Timing Issues"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Feel arms and body are disconnected", "Hit inconsistent fat/thin shots", "Swing too long"],
            faceVsPath: "Connection is key to a repeatable low point."
        },
        whyItWorks: [
            "Syncs the arm swing to the torso rotation.",
            "Prevents the arms from 'running off' on their own.",
            "Tightens the backswing."
        ],
        steps: [
            "Place a towel or headcover under both armpits.",
            "Make 3/4 swings without dropping the towel.",
            "Feel the chest moving the arms."
        ],
        checkpoints: ["Towel stays in place.", "Swing feels 'shorter' but more solid."],
        mistakes: ["Using too large a towel.", "Trying to swing perfectly full."],
        progression: [
            { level: "b", task: "Pitch shots." },
            { level: "i", task: "Full irons." },
            { level: "a", task: "Driver (hard)." }
        ],
        contraindications: ["Limited flexibility."],
        prescription: ["20 balls with towel."],
        // Normalized Data
        id: "DRL-SEQ-CONN-SYNC-001",
        primaryCategory: "SEQ",
        secondaryCategories: ["WGT"],
        level: 3,
        fixesFaults: ["FLT-SEQ-OVERSWING", "FLT-SEQ-DISCONNECT"],
        rootCausePriority: 1.2
    },
    "lead-wrist-bow": {
        slug: "lead-wrist-bow",
        title: "Lead Wrist Bow",
        category: "Wrist Angles",
        duration: "5 min",
        videoUrl: "/videos/wrist-bow.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Lead+Wrist+Bow+Golf+Drill",
        clubBadge: "Irons",
        difficulty: "Advanced",
        faultsFixed: ["Cupped Wrist", "Open Face", "Weak Slice"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Slice the ball", "Add loft (hit it high and short)", "Have a cupped lead wrist at top"],
            faceVsPath: "A bowed wrist closes the face, countering a slice path."
        },
        whyItWorks: [
            "Strengthens the clubface position.",
            "Encourages shaft lean at impact.",
            "De-lofts the club for more distance."
        ],
        steps: [
            "At the top of backswing, feel like you are revving a motorcycle throttle.",
            "This bows the lead wrist (knuckles directly to sky).",
            "Hold that angle down to impact."
        ],
        checkpoints: ["Logo of glove faces target at top.", "Shaft lean at impact."],
        mistakes: ["Bowing too early (in takeaway).", "Gripping too tight."],
        progression: [
            { level: "b", task: "Top of swing checkpoints." },
            { level: "i", task: "Slow motion hits." },
            { level: "a", task: "Full speed." }
        ],
        contraindications: ["If you already hook, DO NOT do this."],
        prescription: ["10 slow motion rehearsals."],
        // Normalized Data
        id: "DRL-FCE-IMP-CLOSE-001",
        primaryCategory: "FCE",
        secondaryCategories: ["AOA"],
        level: 2,
        fixesFaults: ["FLT-FCE-CUPPED", "FLT-FCE-OPEN"],
        rootCausePriority: 1.0
    },
    "gate-putting": {
        slug: "gate-putting",
        title: "Tiger's Gate Drill",
        category: "Putting",
        duration: "10 min",
        videoUrl: "/videos/gate-putting.mp4",
        externalLink: "https://www.youtube.com/results?search_query=Tiger+Woods+Gate+Putting+Drill",
        clubBadge: "Putter",
        difficulty: "Advanced",
        faultsFixed: ["Heel/Toe Strikes", "Push/Pull"],
        diagnosis: {
            condition: "This drill is best if you:",
            symptoms: ["Miss short putts", "Hit it off the toe/heel"],
            faceVsPath: "Center contact is the #1 factor in distance control."
        },
        whyItWorks: [
            "Forces the putter to move on a pure path.",
            "Immediate feedback on strikes.",
            "Used by Tiger Woods for 20 years."
        ],
        steps: [
            "Place two tees just wider than your putter head.",
            "Place ball in middle.",
            "Stroke putt without hitting tees.",
            "(Optional) Add a coin gate 3 feet in front for start line."
        ],
        checkpoints: ["Putter passes cleanly.", "Ball rolls pure."],
        mistakes: ["Tees too wide (too easy)."],
        progression: [
            { level: "b", task: "Wide gate." },
            { level: "i", task: "Tight gate." },
            { level: "a", task: "One hand only." }
        ],
        contraindications: ["None."],
        prescription: ["50 made putts."],
        // Normalized Data
        id: "DRL-STR-PUTT-GATE-001",
        primaryCategory: "STR",
        secondaryCategories: ["PTH"],
        level: 4,
        fixesFaults: ["FLT-STR-TOE", "FLT-STR-HEEL"],
        rootCausePriority: 0.8
    }
};

export const getDrillData = (slug: string) => DRILLS[slug] || null;
export const getAllDrills = () => Object.values(DRILLS);
