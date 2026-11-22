/**
 * LinkedIn Data Parser
 * Supports:
 * 1. LinkedIn exported CSV format (e.g. Positions.csv)
 * 2. Structured JSON format
 * 3. Plain-text pasted experience from LinkedIn profile
 */

export function parseLinkedInData(input) {
  if (typeof input === 'object' && input !== null) {
    return parseLinkedInJson(input);
  }

  const trimmed = String(input).trim();
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      return parseLinkedInJson(parsed);
    } catch (e) {
      // Fall through to text/CSV parser
    }
  }

  // Check if it's CSV format (contains "Company Name", "Title", etc.)
  if (trimmed.includes('Company Name') && trimmed.includes('Title')) {
    return parseLinkedInCsv(trimmed);
  }

  // Otherwise, parse plain text pasted from LinkedIn profile
  return parseLinkedInText(trimmed);
}

/**
 * Parse structured JSON LinkedIn data
 */
function parseLinkedInJson(data) {
  const experiences = [];
  const items = Array.isArray(data) ? data : data.positions || data.experiences || [];

  items.forEach((item, index) => {
    experiences.push({
      id: `exp-${index + 1}`,
      role: item.role || item.title || "Software Engineer",
      company: item.company || item.companyName || "Company",
      location: item.location || "Remote",
      period: item.period || `${item.startDate || item.startedOn || ''} - ${item.endDate || item.finishedOn || 'PRESENT'}`.trim(),
      type: item.type || "Full-Time",
      status: item.current ? "Current" : "Completed",
      description: item.description || "Contributed to core development and project architecture.",
      bullets: Array.isArray(item.bullets)
        ? item.bullets
        : item.description
        ? item.description.split('\n').filter((l) => l.trim().length > 15).slice(0, 3)
        : ["Developed scalable web applications and distributed components."],
      tech: item.tech || item.skills || ["React", "JavaScript", "TypeScript"],
    });
  });

  return { experiences };
}

/**
 * Parse LinkedIn CSV export (Positions.csv)
 */
function parseLinkedInCsv(csvText) {
  const lines = csvText.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return { experiences: [] };

  const headers = lines[0].split(',').map((h) => h.replace(/"/g, '').trim().toLowerCase());
  const companyIdx = headers.findIndex((h) => h.includes('company'));
  const titleIdx = headers.findIndex((h) => h.includes('title') || h.includes('role'));
  const locationIdx = headers.findIndex((h) => h.includes('location'));
  const startedIdx = headers.findIndex((h) => h.includes('start'));
  const finishedIdx = headers.findIndex((h) => h.includes('finish') || h.includes('end'));
  const descIdx = headers.findIndex((h) => h.includes('description'));

  const experiences = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',').map((c) => c.replace(/"/g, '').trim());
    if (row.length < 2) continue;

    const role = (titleIdx !== -1 ? row[titleIdx] : row[1]) || "Software Engineer";
    const company = (companyIdx !== -1 ? row[companyIdx] : row[0]) || "Company";
    const started = startedIdx !== -1 ? row[startedIdx] : "";
    const finished = finishedIdx !== -1 ? (row[finishedIdx] || "PRESENT") : "PRESENT";
    const location = locationIdx !== -1 ? (row[locationIdx] || "Remote") : "Remote";
    const desc = descIdx !== -1 ? (row[descIdx] || "") : "";

    const bullets = desc
      ? desc.split('\n').filter((l) => l.trim().length > 10).slice(0, 3)
      : ["Contributed to core product features and engineering initiatives."];

    experiences.push({
      id: `exp-${i}`,
      role,
      company,
      location,
      period: started ? `${started} - ${finished}` : "RECENT",
      type: "Full-Time",
      status: finished.toUpperCase().includes("PRESENT") ? "Current" : "Completed",
      description: desc || `Engineered and supported products at ${company}.`,
      bullets,
      tech: ["TypeScript", "React", "Node.js"],
    });
  }

  return { experiences };
}

/**
 * Parse plain-text copy-pasted LinkedIn profile experience section
 */
function parseLinkedInText(text) {
  const blocks = text.split(/\n\s*\n/).filter((b) => b.trim().length > 10);
  const experiences = [];

  blocks.forEach((block, idx) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length >= 2) {
      const role = lines[0];
      const company = lines[1];
      const period = lines[2] || "2022 - PRESENT";
      const descLines = lines.slice(3);

      experiences.push({
        id: `exp-${idx + 1}`,
        role,
        company,
        location: "Remote",
        period,
        type: "Full-Time",
        status: period.toLowerCase().includes("present") ? "Current" : "Completed",
        description: descLines[0] || `Software engineering and architecture at ${company}.`,
        bullets: descLines.length > 1 ? descLines.slice(0, 3) : ["Engineered responsive, performant user interfaces and backend integrations."],
        tech: ["TypeScript", "React", "Node.js"],
      });
    }
  });

  return { experiences };
}
