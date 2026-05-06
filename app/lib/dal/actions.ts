import { z } from 'zod';


export const MissionSchema = z.object({
    missionName: z
        .string()
        .min(2, "שם המשימה חייב להכיל לפחות שני תווים")
        .max(50, "שם המשימה ארוך מדי"),
    userId: z.coerce
        .number()
        .positive("חובה לבחור אחראי למשימה"),
    priority: z.enum(["low", "medium", "high"], {
        required_error: "חובה לבחור עדיפות",
        invalid_type_error: "ערך עדיפות לא תקין"
    }),
});


export type MissionFormData = z.infer<typeof MissionSchema>;