const fs = require('fs');
const path = require('path');
const { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  Table, 
  TableRow, 
  TableCell, 
  WidthType, 
  AlignmentType, 
  HeadingLevel
} = require('docx');

const createDoc = async () => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header Banner
          new Paragraph({
            children: [
              new TextRun({
                text: "BRIGHT MINDS LEARNING",
                bold: true,
                size: 32,
                color: "312E81",
                font: "Calibri"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Student Portal Promotional Video Advert Script & Production Guide",
                bold: true,
                italic: true,
                size: 24,
                color: "F59E0B",
                font: "Calibri"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),

          // Metadata Box
          new Paragraph({
            children: [
              new TextRun({ text: "Title: ", bold: true }),
              new TextRun({ text: "Learn Smarter, Excel Faster | " }),
              new TextRun({ text: "Duration: ", bold: true }),
              new TextRun({ text: "60 Seconds | " }),
              new TextRun({ text: "Tone: ", bold: true }),
              new TextRun({ text: "Inspiring, Modern, Energetic" })
            ],
            spacing: { after: 300 }
          }),

          // Heading 1: Voiceover Transcript
          new Paragraph({
            text: "🎙️ Voiceover (VO) Script Transcript",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `"Faced with tough exam prep, complex math equations, or coding assignments? There’s a smarter way to master your subjects.\n\n`,
                italic: true,
                size: 24
              }),
              new TextRun({
                text: `Welcome to Bright Minds Learning. Browse through dozens of expert-led courses across STEM, humanities, and test prep.\n\n`,
                italic: true,
                size: 24
              }),
              new TextRun({
                text: `Log in to your personalized Student Dashboard to track your learning progress in real-time. See your active pass, enrolled subjects, and daily achievements at a glance.\n\n`,
                italic: true,
                size: 24
              }),
              new TextRun({
                text: `Need direct guidance? Schedule 1-on-1 live interactive sessions with top-tier tutors for real-time answers and exam confidence.\n\n`,
                italic: true,
                size: 24
              }),
              new TextRun({
                text: `Prefer self-paced learning? Stream on-demand HD video masterclasses anytime, and download exclusive PDF formula sheets, practice worksheets, and exam keys.\n\n`,
                italic: true,
                size: 24
              }),
              new TextRun({
                text: `Transform your grades today. Visit Bright Minds Learning and unlock your full potential!"`,
                bold: true,
                italic: true,
                size: 24,
                color: "312E81"
              })
            ],
            spacing: { after: 400 }
          }),

          // Heading 2: Scene Storyboard & Shot List Table
          new Paragraph({
            text: "📽️ Storyboard & Scene Breakdown",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 200 }
          }),

          // Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              // Header Row
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Scene & Time", bold: true, color: "FFFFFF" })] })], width: { size: 20, type: WidthType.PERCENTAGE }, backgroundColor: "312E81" }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Visual Description", bold: true, color: "FFFFFF" })] })], width: { size: 30, type: WidthType.PERCENTAGE }, backgroundColor: "312E81" }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "On-Screen Action / Text", bold: true, color: "FFFFFF" })] })], width: { size: 25, type: WidthType.PERCENTAGE }, backgroundColor: "312E81" }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Audio & Voiceover", bold: true, color: "FFFFFF" })] })], width: { size: 25, type: WidthType.PERCENTAGE }, backgroundColor: "312E81" }),
                ]
              }),
              // Row 1
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 1\n0:00 - 0:08" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Split screen: Frustrated student studying late at night transitions into glowing Bright Minds home screen." })] }),
                  new TableCell({ children: [new Paragraph({ text: "Struggling to Keep Up? ➔ Learn Smarter." })] }),
                  new TableCell({ children: [new Paragraph({ text: "Ambient synth swell.\nVO: 'Faced with tough exam prep...'" })] }),
                ]
              }),
              // Row 2
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 2\n0:08 - 0:16" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Cursor scrolls through 12+ courses. Clicks course to show syllabus & sample preview with 🔒 lock badge." })] }),
                  new TableCell({ children: [new Paragraph({ text: "12+ Expert Courses • Free Sample Previews" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Upbeat rhythm starts.\nVO: 'Welcome to Bright Minds Learning...'" })] }),
                ]
              }),
              // Row 3
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 3\n0:16 - 0:26" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Smooth transition into Student Dashboard. Shows welcome header, active Premium Pass pill, and progress bars." })] }),
                  new TableCell({ children: [new Paragraph({ text: "Personalized Dashboard • Progress Tracking" })] }),
                  new TableCell({ children: [new Paragraph({ text: "VO: 'Log in to your personalized Student Dashboard...'" })] }),
                ]
              }),
              // Row 4
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 4\n0:26 - 0:38" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Zoom into Live Sessions tab. Cursor clicks 'Join Meeting Room' showing live Zoom tutor video call." })] }),
                  new TableCell({ children: [new Paragraph({ text: "🔴 1-on-1 Live Online Tutoring" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Gentle chime SFX.\nVO: 'Need direct guidance? Schedule 1-on-1 live...'" })] }),
                ]
              }),
              // Row 5
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 5\n0:38 - 0:48" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Fast cut to Recorded Tutorials HD video player, then clicks Study Resources downloading PDF formula sheet." })] }),
                  new TableCell({ children: [new Paragraph({ text: "📹 24/7 On-Demand HD Video\n📄 Downloadable PDF Cheat Sheets" })] }),
                  new TableCell({ children: [new Paragraph({ text: "VO: 'Prefer self-paced learning? Stream HD masterclasses...'" })] }),
                ]
              }),
              // Row 6
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "Scene 6\n0:48 - 1:00" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Full brand end screen featuring indigo/amber design, logo, URL, and Sign Up CTA button." })] }),
                  new TableCell({ children: [new Paragraph({ text: "Bright Minds Learning\nShaping brighter futures, one lesson at a time.\nSign Up Free ➔ brightminds.edu" })] }),
                  new TableCell({ children: [new Paragraph({ text: "Music reaches crescendo.\nVO: 'Transform your grades today...'" })] }),
                ]
              }),
            ]
          }),

          // Heading 3: AI Production Prompts
          new Paragraph({
            text: "🤖 AI Production Prompts",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: "Voiceover Prompt (ElevenLabs / Murf.ai): ", bold: true }),
              new TextRun({ text: "Young Adult (20s-30s), Warm, Energetic, Professional, American/Neutral Accent. Paced at 145 WPM." })
            ],
            spacing: { after: 150 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: "Video AI Prompt (Runway Gen-2 / Pika / Synthesia): ", bold: true }),
              new TextRun({ text: "A focused high school student sitting at a modern desk with warm lighting, watching an interactive online lesson on a laptop, 4k cinematic education commercial." })
            ],
            spacing: { after: 300 }
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join(__dirname, 'Bright_Minds_Learning_Video_Advert_Script.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`SUCCESS: Exported Word Document to ${outputPath}`);
};

createDoc().catch(err => {
  console.error(err);
  process.exit(1);
});
