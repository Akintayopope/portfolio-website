import { useState } from 'react';
import './DevSetup.css';

import { Heading } from '../../components/Heading/Heading';
import { Typography } from '../../components/Typography/Typography';
import { Card } from '../../components/Card/Card';

import {
  Code2,
  Terminal,
  Type,
  PlugZap,
  Palette,
  Settings,
  Zap,
} from 'lucide-react';

export default function DevSetup() {
  const [activeTab, setActiveTab] = useState<'vscode' | 'terminal' | 'font'>(
    'vscode'
  );

  return (
    <section className="devsetup-section" id="devsetup">
      <div className="devsetup-container">
        {/* ====================== HEADER ====================== */}
        <div className="section-header">
          <span className="section-tag">
            <span>⚙️</span>
            <span>Development Environment</span>
          </span>

          <Heading level={2} className="section-title">
            My Developer Setup
          </Heading>

          <Typography className="section-description" muted>
            A carefully crafted development environment designed for
            productivity, comfort, and clean code. Every tool is chosen with
            purpose.
          </Typography>
        </div>

        {/* ====================== TABS ====================== */}
        <div className="setup-tabs">
          <button
            className={`tab-button ${activeTab === 'vscode' ? 'active' : ''}`}
            onClick={() => setActiveTab('vscode')}
          >
            <span className="tab-icon">
              <Code2 size={18} />
            </span>
            <span>VS Code</span>
          </button>

          <button
            className={`tab-button ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <span className="tab-icon">
              <Terminal size={18} />
            </span>
            <span>Terminal</span>
          </button>

          <button
            className={`tab-button ${activeTab === 'font' ? 'active' : ''}`}
            onClick={() => setActiveTab('font')}
          >
            <span className="tab-icon">
              <Type size={18} />
            </span>
            <span>Font</span>
          </button>
        </div>
        <div className="tab-content-wrapper">
          <div
            className={`tab-content ${activeTab === 'vscode' ? 'active' : ''}`}
            id="tab-vscode"
          >
            <div className="vscode-bento">
              {/* EXTENSIONS */}
              <Card className="bento-card bento-large">
                <div className="bento-header">
                  <div className="bento-icon">
                    <PlugZap size={26} />
                  </div>
                  <div className="bento-title">Essential Extensions</div>
                </div>

                <div className="bento-content">
                  <div className="extensions-grid">
                    {[
                      'ES7+ React/Redux/JS Snippets',
                      'Prettier – Code formatter',
                      'ESLint',
                      'GitLens — Git supercharged',
                      'Auto Rename Tag',
                      'Live Server',
                      'Path Intellisense',
                      'Material Icon Theme',
                    ].map((label, index) => (
                      <div key={index} className="extension-chip">
                        <div className="chip-icon">
                          <Zap size={16} />
                        </div>
                        <div className="chip-text">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* THEME */}
              <Card className="bento-card">
                <div className="bento-header">
                  <div className="bento-icon">
                    <Palette size={22} />
                  </div>
                  <div className="bento-title">Theme</div>
                </div>

                <div className="bento-content">
                  <p style={{ marginBottom: '1rem' }}>One Dark Pro</p>

                  <div className="code-preview">
                    <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-function"> greeting</span> =
                      <span className="code-string"> "Hello!"</span>;
                    </div>

                    <div className="code-line">
                      <span className="code-comment">Beautiful syntax</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bento-card">
                <div className="bento-header">
                  <div className="bento-icon">
                    <Settings size={22} />
                  </div>
                  <div className="bento-title">Settings</div>
                </div>

                <div className="bento-content">
                  <div className="settings-table">
                    <div className="setting-row">
                      <span className="setting-key">Font Size</span>
                      <span className="setting-value">14px</span>
                    </div>
                    <div className="setting-row">
                      <span className="setting-key">Tab Size</span>
                      <span className="setting-value">2 spaces</span>
                    </div>
                    <div className="setting-row">
                      <span className="setting-key">Format on Save</span>
                      <span className="setting-value">Enabled</span>
                    </div>
                    <div className="setting-row">
                      <span className="setting-key">Auto Save</span>
                      <span className="setting-value">afterDelay</span>
                    </div>
                    <div className="setting-row">
                      <span className="setting-key">Word Wrap</span>
                      <span className="setting-value">On</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* ================== TERMINAL TAB ================== */}
          <div
            className={`tab-content ${
              activeTab === 'terminal' ? 'active' : ''
            }`}
            id="tab-terminal"
          >
            <div className="terminal-split">
              <Card className="terminal-card">
                <div className="terminal-header">
                  <div className="terminal-title">
                    <span>⚡</span>
                    <span>Configuration</span>
                  </div>
                  <div className="terminal-subtitle">Zsh with Oh My Zsh</div>
                </div>

                <div className="terminal-body">
                  <ul className="info-list">
                    {[
                      ['Shell', 'Zsh (Z Shell)'],
                      ['Framework', 'Oh My Zsh'],
                      ['Theme', 'Dracula'],
                      ['Font', 'Fira Code 14px'],
                    ].map(([label, value], index) => (
                      <li className="info-item" key={index}>
                        <div className="info-item-label">{label}</div>
                        <div className="info-item-value">{value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card variant="glass" className="terminal-card">
                <div className="terminal-header">
                  <div className="terminal-title">
                    <span>🔌</span>
                    <span>Plugins & Preview</span>
                  </div>
                  <div className="terminal-subtitle">
                    Supercharged terminal experience
                  </div>
                </div>

                <div className="terminal-body">
                  <div className="terminal-window">
                    {['npm run dev', 'git status', 'docker ps'].map(
                      (cmd, index) => (
                        <div className="terminal-cmd" key={index}>
                          <span className="terminal-prompt">➜</span>
                          <span className="terminal-path">~</span>
                          <span className="terminal-command">{cmd}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="plugins-wrap">
                    {[
                      'git',
                      'node',
                      'npm',
                      'docker',
                      'zsh-autosuggestions',
                      'zsh-syntax-highlighting',
                    ].map((plugin, index) => (
                      <span className="plugin-tag" key={index}>
                        {plugin}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* ================== FONT TAB ================== */}
          <div
            className={`tab-content ${activeTab === 'font' ? 'active' : ''}`}
            id="tab-font"
          >
            <div className="font-showcase">
              <Card variant="glass" className="font-hero">
                <div className="font-display">Fira Code</div>
                <div className="font-meta">
                  Monospaced font with programming ligatures
                </div>

                <div className="font-features-grid">
                  {[
                    ['Font Size', '14px'],
                    ['Line Height', '1.6'],
                    ['Weight', 'Regular'],
                    ['Ligatures', 'Enabled ✓'],
                  ].map(([label, value], index) => (
                    <div className="feature-card" key={index}>
                      <div className="feature-label">{label}</div>
                      <div className="feature-value">{value}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="glass" className="ligatures-demo">
                <div className="ligatures-title">
                  Programming Ligatures in Action
                </div>

                <div className="ligature-examples">
                  {['!=', '===', '=>', '>=', '<=', '->', '&&', '||'].map(
                    (item, index) => (
                      <span className="ligature-item" key={index}>
                        {item}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
