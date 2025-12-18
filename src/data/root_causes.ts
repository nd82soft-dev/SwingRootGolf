export type VideoQueryIntent =
    | "ball_position_low_point"
    | "setup_fundamentals"
    | "grip_face_control"
    | "grip_matchups"
    | "setup_posture"
    | "aim_alignment"
    | "stance_balance"
    | "setup_spacing"
    | "transition_sequencing"
    | "shallowing_drill"
    | "arm_body_sequence"
    | "body_stall_release"
    | "rotation_control"
    | "connection"
    | "sequencing_timing"
    | "pressure_shift"
    | "weight_transfer"
    | "rotation_vs_slide"
    | "dynamic_balance"
    | "pressure_timing"
    | "vertical_forces"
    | "pressure_awareness"
    | "face_control"
    | "face_closure"
    | "face_timing"
    | "club_path"
    | "swing_plane"
    | "low_point_control"
    | "impact_conditions"
    | "short_game_low_point";

export type VideoQuery = {
    query: string;
    channel_whitelist: string[];
    intent: VideoQueryIntent;
    website_only?: boolean;
    app_safe?: boolean;
};

export type RootCauseDefinition = {
    root_cause_id: string;
    label: string;
    video_queries: VideoQuery[];
};

export const GLOBAL_VIDEO_RULES = {
    max_duration_seconds: 300,
    sort: "relevance",
    safe_search: true,
    language: "en"
};

export const ROOT_CAUSES: Record<string, RootCauseDefinition> = {
    // I. SETUP & ADDRESS (RC-SET)
    "RC-SET-BALL-BACK": {
        root_cause_id: "RC-SET-BALL-BACK",
        label: "Ball position too far back",
        video_queries: [
            {
                query: "Porzak Golf ball position irons contact",
                channel_whitelist: ["Porzak Golf"],
                intent: "ball_position_low_point",
                website_only: true
            },
            {
                query: "Titleist TPI ball position irons",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "setup_fundamentals",
                app_safe: true
            }
        ]
    },
    "RC-SET-BALL-FORWARD": {
        root_cause_id: "RC-SET-BALL-FORWARD",
        label: "Ball position too far forward",
        video_queries: [
            {
                query: "Titleist TPI ball position fundamentals",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "setup_fundamentals",
                app_safe: true
            }
        ]
    },
    "RC-SET-GRIP-WEAK": {
        root_cause_id: "RC-SET-GRIP-WEAK",
        label: "Grip too weak",
        video_queries: [
            {
                query: "Jonathan Kim Moss weak grip clubface control",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "grip_face_control",
                website_only: true
            }
        ]
    },
    "RC-SET-GRIP-STRONG": {
        root_cause_id: "RC-SET-GRIP-STRONG",
        label: "Grip too strong",
        video_queries: [
            {
                query: "Porzak Golf strong grip matchups",
                channel_whitelist: ["Porzak Golf"],
                intent: "grip_matchups",
                website_only: true
            }
        ]
    },
    "RC-SET-POSTURE": {
        root_cause_id: "RC-SET-POSTURE",
        label: "Poor posture at address",
        video_queries: [
            {
                query: "Titleist TPI golf posture setup",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "setup_posture",
                app_safe: true
            }
        ]
    },
    "RC-SET-ALIGNMENT": {
        root_cause_id: "RC-SET-ALIGNMENT",
        label: "Poor alignment",
        video_queries: [
            {
                query: "Titleist TPI alignment fundamentals golf",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "aim_alignment",
                app_safe: true
            }
        ]
    },
    "RC-SET-STANCE-WIDTH": {
        root_cause_id: "RC-SET-STANCE-WIDTH",
        label: "Incorrect stance width",
        video_queries: [
            {
                query: "TPI stance width golf setup",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "stance_balance",
                app_safe: true
            }
        ]
    },
    "RC-SET-DISTANCE-FROM-BALL": {
        root_cause_id: "RC-SET-DISTANCE-FROM-BALL",
        label: "Incorrect distance from ball",
        video_queries: [
            {
                query: "Porzak Golf distance from ball setup",
                channel_whitelist: ["Porzak Golf"],
                intent: "setup_spacing",
                website_only: true
            }
        ]
    },

    // II. SEQUENCING & KINEMATICS (RC-SEQ)
    "RC-SEQ-UPPER-BODY-DOMINANT": {
        root_cause_id: "RC-SEQ-UPPER-BODY-DOMINANT",
        label: "Over-the-top downswing",
        video_queries: [
            {
                query: "Porzak Golf over the top root cause",
                channel_whitelist: ["Porzak Golf"],
                intent: "transition_sequencing",
                website_only: true
            },
            {
                query: "Me and My Golf pump drill",
                channel_whitelist: ["Me and My Golf"],
                intent: "shallowing_drill",
                app_safe: true
            }
        ]
    },
    "RC-SEQ-ARMS-DOMINANT": {
        root_cause_id: "RC-SEQ-ARMS-DOMINANT",
        label: "Arms dominate downswing",
        video_queries: [
            {
                query: "Jonathan Kim Moss arm body sequencing golf",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "arm_body_sequence",
                website_only: true
            }
        ]
    },
    "RC-SEQ-BODY-STALL": {
        root_cause_id: "RC-SEQ-BODY-STALL",
        label: "Body stalls through impact",
        video_queries: [
            {
                query: "Porzak Golf body stall flip impact",
                channel_whitelist: ["Porzak Golf"],
                intent: "body_stall_release",
                website_only: true
            }
        ]
    },
    "RC-SEQ-OVER-ROTATION": {
        root_cause_id: "RC-SEQ-OVER-ROTATION",
        label: "Over-rotation or spin out",
        video_queries: [
            {
                query: "Porzak Golf spin out downswing",
                channel_whitelist: ["Porzak Golf"],
                intent: "rotation_control",
                website_only: true
            }
        ]
    },
    "RC-SEQ-CONNECTION": {
        root_cause_id: "RC-SEQ-CONNECTION",
        label: "Poor arm–body connection",
        video_queries: [
            {
                query: "Jonathan Kim Moss arm body connection golf",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "connection",
                website_only: true
            }
        ]
    },
    "RC-SEQ-TIMING": {
        root_cause_id: "RC-SEQ-TIMING",
        label: "General sequencing mismatch",
        video_queries: [
            {
                query: "Padraig Harrington golf sequencing timing",
                channel_whitelist: ["Padraig Harrington"],
                intent: "sequencing_timing",
                website_only: true
            }
        ]
    },

    // III. WEIGHT & PRESSURE (RC-WGT)
    "RC-WGT-HANG-BACK": {
        root_cause_id: "RC-WGT-HANG-BACK",
        label: "Hanging back at impact",
        video_queries: [
            {
                query: "Porzak Golf pressure forward impact",
                channel_whitelist: ["Porzak Golf"],
                intent: "pressure_shift",
                website_only: true
            },
            {
                query: "Rory McIlroy step drill",
                channel_whitelist: ["PGA", "PGA of America"],
                intent: "weight_transfer",
                app_safe: true
            }
        ]
    },
    "RC-WGT-LATERAL-SLIDE": {
        root_cause_id: "RC-WGT-LATERAL-SLIDE",
        label: "Excessive lateral slide",
        video_queries: [
            {
                query: "Jonathan Kim Moss slide vs rotation golf",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "rotation_vs_slide",
                website_only: true
            }
        ]
    },
    "RC-WGT-BALANCE-LOSS": {
        root_cause_id: "RC-WGT-BALANCE-LOSS",
        label: "Dynamic balance loss",
        video_queries: [
            {
                query: "Titleist TPI balance golf swing",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "dynamic_balance",
                app_safe: true
            }
        ]
    },
    "RC-WGT-EARLY-FORWARD": {
        root_cause_id: "RC-WGT-EARLY-FORWARD",
        label: "Early forward pressure",
        video_queries: [
            {
                query: "Porzak Golf early pressure golf",
                channel_whitelist: ["Porzak Golf"],
                intent: "pressure_timing",
                website_only: true
            }
        ]
    },
    "RC-WGT-VERTICAL": {
        root_cause_id: "RC-WGT-VERTICAL",
        label: "Poor vertical force usage",
        video_queries: [
            {
                query: "TrackMan vertical forces golf swing",
                channel_whitelist: ["TrackMan Golf"],
                intent: "vertical_forces",
                website_only: true
            }
        ]
    },
    "RC-WGT-AWARENESS": {
        root_cause_id: "RC-WGT-AWARENESS",
        label: "Poor pressure shift awareness",
        video_queries: [
            {
                query: "Porzak Golf pressure awareness drill",
                channel_whitelist: ["Porzak Golf"],
                intent: "pressure_awareness",
                website_only: true
            }
        ]
    },

    // IV. CLUBFACE CONTROL (RC-FCE)
    "RC-FCE-OPEN": {
        root_cause_id: "RC-FCE-OPEN",
        label: "Clubface open at impact",
        video_queries: [
            {
                query: "Jonathan Kim Moss clubface open impact",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "face_control",
                website_only: true
            }
        ]
    },
    "RC-FCE-CLOSED": {
        root_cause_id: "RC-FCE-CLOSED",
        label: "Clubface closed at impact",
        video_queries: [
            {
                query: "Porzak Golf clubface closed hooks",
                channel_whitelist: ["Porzak Golf"],
                intent: "face_closure",
                website_only: true
            }
        ]
    },
    "RC-FCE-TIMING": {
        root_cause_id: "RC-FCE-TIMING",
        label: "Unstable clubface timing",
        video_queries: [
            {
                query: "Padraig Harrington clubface timing golf",
                channel_whitelist: ["Padraig Harrington"],
                intent: "face_timing",
                website_only: true
            }
        ]
    },

    // V. SWING PATH & PLANE (RC-PTH)
    "RC-PTH-OUT-TO-IN": {
        root_cause_id: "RC-PTH-OUT-TO-IN",
        label: "Out-to-in swing direction",
        video_queries: [
            {
                query: "TrackMan out to in club path",
                channel_whitelist: ["TrackMan Golf"],
                intent: "club_path",
                app_safe: true
            }
        ]
    },
    "RC-PTH-IN-TO-OUT": {
        root_cause_id: "RC-PTH-IN-TO-OUT",
        label: "Excessive in-to-out path",
        video_queries: [
            {
                query: "Porzak Golf in to out path",
                channel_whitelist: ["Porzak Golf"],
                intent: "club_path",
                website_only: true
            }
        ]
    },
    "RC-PTH-STEEP": {
        root_cause_id: "RC-PTH-STEEP",
        label: "Downswing too steep",
        video_queries: [
            {
                query: "Jonathan Kim Moss steep downswing golf",
                channel_whitelist: ["Jonathan Kim Moss"],
                intent: "swing_plane",
                website_only: true
            }
        ]
    },
    "RC-PTH-SHALLOW": {
        root_cause_id: "RC-PTH-SHALLOW",
        label: "Downswing too shallow",
        video_queries: [
            {
                query: "Porzak Golf shallow downswing",
                channel_whitelist: ["Porzak Golf"],
                intent: "swing_plane",
                website_only: true
            }
        ]
    },

    // VI. LOW POINT & IMPACT (RC-LP)
    "RC-LP-BEHIND": {
        root_cause_id: "RC-LP-BEHIND",
        label: "Low point behind the ball",
        video_queries: [
            {
                query: "Titleist TPI low point control golf",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "low_point_control",
                app_safe: true
            }
        ]
    },
    "RC-LP-AHEAD": {
        root_cause_id: "RC-LP-AHEAD",
        label: "Low point too far forward",
        video_queries: [
            {
                query: "Titleist TPI dynamic loft impact",
                channel_whitelist: ["Titleist Performance Institute"],
                intent: "impact_conditions",
                website_only: true
            }
        ]
    },

    // VII. SHORT GAME (RC-SG)
    "RC-SG-LOW-POINT": {
        root_cause_id: "RC-SG-LOW-POINT",
        label: "Poor chipping contact",
        video_queries: [
            {
                query: "Phil Mickelson chipping fundamentals",
                channel_whitelist: ["Phil Mickelson"],
                intent: "short_game_low_point",
                website_only: true
            }
        ]
    }
};
