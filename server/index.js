import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchGitHubData } from './githubParser.js';
import { parseLinkedInData } from './linkedinParser.js';
import { updatePortfolioDataFile } from './dataWriter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 1. GitHub Import Endpoint
app.get('/api/github/:username', async (req, res) => {
  const { username } = req.params;
  const token = req.query.token || process.env.GITHUB_TOKEN || null;

  try {
    const data = await fetchGitHubData(username, token);
    res.json({ success: true, ...data });
  } catch (error) {
    console.error(`[GitHub Sync Error]:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. LinkedIn Parse Endpoint
app.post('/api/linkedin/parse', (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ success: false, error: 'No LinkedIn data provided in request body' });
  }

  try {
    const parsed = parseLinkedInData(data);
    res.json({ success: true, ...parsed });
  } catch (error) {
    console.error(`[LinkedIn Parse Error]:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Save & Apply Data Endpoint
app.post('/api/save', async (req, res) => {
  const payload = req.body;

  try {
    const result = await updatePortfolioDataFile(payload, projectRoot);
    res.json({
      success: true,
      message: 'Portfolio data updated successfully in src/data/portfolioData.js',
      ...result,
    });
  } catch (error) {
    console.error(`[Save Error]:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Sync Backend running at http://localhost:${PORT}`);
});
