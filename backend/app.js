const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Routes
app.use('/health', require('./routes/health'));
app.use('/version', require('./routes/version'));
app.use('/echo', require('./routes/echo'));
app.use('/aksi/proof', require('./routes/aksi/proof'));
app.use('/aksi/proof/stable', require('./routes/aksi/proofStable'));
app.use('/aksi/logs', require('./routes/aksi/logs'));
app.use('/aksi/metrics', require('./routes/aksi/metrics'));

// API info endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'Milana Backend API',
        version: require('./package.json').version,
        endpoints: [
            'GET /',
            'GET /health',
            'GET /version',
            'POST /echo',
            'GET /aksi/proof',
            'POST /aksi/proof/stable',
            'GET /aksi/logs',
            'POST /aksi/logs/append',
            'GET /aksi/logs/export',
            'GET /aksi/metrics'
        ]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Milana backend running on port ${PORT}`));
