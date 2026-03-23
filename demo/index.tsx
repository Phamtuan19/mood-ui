/**
 * Demo App — MoodUI Component Showcase
 */

import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/global.css'; // Import MoodUI global styles (reset, keyframes)

import {
  ThemeProvider,
  lightThemeClass,
  darkThemeClass,
  Button,
  Badge,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardDivider,
  CardTitle,
  CardDescription,
  Alert,
  Modal,
  ModalTitle,
  ModalDescription,
  ModalHeader,
  ModalFooter,
  ModalContent,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  Tooltip,
} from '../src';
import { alert } from '../src/css/alert.css';

// ──────────────────────────────────────────────────────────────────────────────
// App
// ──────────────────────────────────────────────────────────────────────────────

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className={`${theme === 'dark' ? darkThemeClass : lightThemeClass}`}>
        <div className="demo-root">
          {/* ── Header ─────────────────────────────────────────────────── */}
          <header className="demo-header">
            <div className="demo-header-inner">
              <div>
                <div className="demo-title">MoodUI</div>
                <div className="demo-subtitle">3-Layer Token System · Zero Dependencies</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* Theme toggle */}
                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
                {/* Dropdown */}
                <Dropdown>
                  <DropdownTrigger
                    as="button"
                    className="theme-toggle"
                    aria-label="Options"
                    onClick={() => { }}
                  >
                    ⋮
                  </DropdownTrigger>
                  <DropdownContent align="end">
                    <DropdownItem onClick={() => alert('GitHub')}>GitHub</DropdownItem>
                    <DropdownItem onClick={() => alert('Docs')}>Documentation</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem destructive onClick={() => alert('Delete')}>
                      Delete
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </div>
            </div>
          </header>

          {/* ── Hero ──────────────────────────────────────────────────── */}
          <div className="demo-hero">
            <div className="demo-hero-inner">
              <h2>
                A design token system built for
                <span style={{ color: 'var(--color-primary)', display: 'block' }}>
                  effortless customization
                </span>
              </h2>
              <p style={{ marginTop: '16px' }}>
                Raw → Semantic → Component. Every layer is customizable.
              </p>
              <div className="demo-row" style={{ justifyContent: 'center', marginTop: '24px' }}>
                <Button colorScheme="primary" onClick={() => setModalOpen(true)}>
                  Open Modal
                </Button>
                <Button colorScheme="secondary" variant="outline" onClick={() => setDrawerOpen(true)}>
                  Open Drawer
                </Button>
              </div>
            </div>
          </div>

          {/* ── Button ─────────────────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">Button</h2>
            <p className="demo-section-desc">4 variants × 9 color schemes × 5 sizes = 180 combinations</p>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Solid</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink', 'gray'] as const).map(cs => (
                  <Button key={cs} colorScheme={cs} size="sm">{cs}</Button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Outline</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink'] as const).map(cs => (
                  <Button key={cs} variant="outline" colorScheme={cs} size="sm">{cs}</Button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Ghost</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink'] as const).map(cs => (
                  <Button key={cs} variant="ghost" colorScheme={cs} size="sm">{cs}</Button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Sizes</p>
              <div className="demo-row">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>States</p>
              <div className="demo-row">
                <Button loading>Loading</Button>
                <Button loading loadingText="Saving...">Save</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </div>
          </section>

          {/* ── Badge ──────────────────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">Badge</h2>
            <p className="demo-section-desc">3 sizes × 3 variants × 10 color schemes</p>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Solid</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink', 'gray'] as const).map(cs => (
                  <Badge key={cs} colorScheme={cs}>{cs}</Badge>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Subtle</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink'] as const).map(cs => (
                  <Badge key={cs} variant="subtle" colorScheme={cs}>{cs}</Badge>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Outline</p>
              <div className="demo-row demo-row-wrap">
                {(['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'purple', 'pink'] as const).map(cs => (
                  <Badge key={cs} variant="outline" colorScheme={cs}>{cs}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Sizes + Dot</p>
              <div className="demo-row">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
                <Badge dot>With dot</Badge>
                <Badge dot colorScheme="success">Online</Badge>
                <Badge dot colorScheme="danger">Offline</Badge>
              </div>
            </div>
          </section>

          {/* ── Input ───────────────────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">Input</h2>
            <p className="demo-section-desc">Sizes + statuses + addons + icons</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Sizes</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input" />
                  <Input size="lg" placeholder="Large input" />
                </div>
              </div>

              <div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Statuses</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Input status="error" placeholder="Error state" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                  <Input status="success" placeholder="Success state" />
                  <Input disabled placeholder="Disabled" />
                </div>
              </div>

              <div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Addons</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Input leftAddon="@" placeholder="Username" />
                  <Input rightAddon=".com" placeholder="Domain" />
                  <Input leftAddon="https://" rightAddon=".com" placeholder="Website" />
                </div>
              </div>
            </div>
          </section>

          {/* ── Alert ──────────────────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">Alert</h2>
            <p className="demo-section-desc">Variants × color schemes × with/without icon</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Alert colorScheme="info" title="Information">
                This is an informational message for the user.
              </Alert>
              <Alert colorScheme="success" title="Success" variant="solid">
                Your changes have been saved successfully.
              </Alert>
              <Alert colorScheme="warning" variant="outline" title="Warning" description="This action may have unintended consequences." />
              <Alert colorScheme="danger" title="Error" hideIcon>
                Something went wrong. Please try again.
              </Alert>
            </div>
          </section>

          {/* ── Card ───────────────────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">Card</h2>
            <p className="demo-section-desc">Composable container with header, body, footer, and divider</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <Card size="md" shadow="md">
                <CardBody>
                  <CardTitle>Project Dashboard</CardTitle>
                  <CardDescription>
                    A high-level overview of your project's metrics and recent activity.
                  </CardDescription>
                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Badge colorScheme="success">Active</Badge>
                    <Badge variant="outline" colorScheme="gray">v2.4.0</Badge>
                  </div>
                </CardBody>
                <CardDivider />
                <CardFooter>
                  <Button size="sm" variant="ghost">View Details</Button>
                  <Button size="sm" colorScheme="primary">Settings</Button>
                </CardFooter>
              </Card>

              <Card size="md" shadow="md" borderless>
                <CardBody>
                  <CardTitle>Quick Actions</CardTitle>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                    <Button size="sm" fullWidth variant="outline">Deploy to Production</Button>
                    <Button size="sm" fullWidth variant="outline">Run Tests</Button>
                    <Button size="sm" fullWidth variant="outline" colorScheme="danger">Clear Cache</Button>
                  </div>
                </CardBody>
              </Card>

              <Card size="md" shadow="lg">
                <CardBody>
                  <CardTitle>Activity Feed</CardTitle>
                  {['Pushed to main', 'Opened PR #42', 'Deployed v2.3.1'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--color-border-default)' : 'none' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)' }} />
                      <span style={{ fontSize: '14px', color: 'var(--color-text-primary)' }}>{item}</span>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </div>
          </section>

          {/* ── Token Override Demo ────────────────────────────────────── */}
          <section className="demo-section">
            <h2 className="demo-section-title">CSS Override — No Config Needed</h2>
            <p className="demo-section-desc">
              Change tokens at runtime using CSS variables. Try the color pickers below.
            </p>
            <div className="demo-code-block">
              {`:root {
  --color-primary:       /* your color */;
  --button-radius-full:  12px;
  --tooltip-bg:         #1e2937;
}

[data-mood-theme="dark"] {
  --color-canvas:       #0a0a0a;
  --color-surface:      #171717;
}`}
            </div>
            <div style={{ marginTop: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                Try changing primary color:
              </p>
              <div className="demo-row demo-row-wrap">
                {['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'].map(color => (
                  <Tooltip key={color} content={color} defaultOpen={false} delayShow={200}>
                    <button
                      onClick={() => setSelectedColor(color)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: color,
                        border: selectedColor === color ? '3px solid var(--color-text-primary)' : '2px solid var(--color-border-default)',
                        cursor: 'pointer',
                        transition: 'transform 0.1s',
                      }}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
          </section>

          {/* ── Modal ──────────────────────────────────────────────────── */}
          <Modal open={modalOpen} onOpenChange={setModalOpen} size="md">
            <ModalContent onClose={() => setModalOpen(false)}>
              <ModalHeader>
                <ModalTitle>Confirm Action</ModalTitle>
                <ModalDescription>
                  Please review the details below before proceeding.
                </ModalDescription>
              </ModalHeader>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  This is a fully accessible modal built without any external UI library.
                  It uses native focus trapping, scroll lock, and keyboard navigation.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <Input placeholder="Enter something..." fullWidth />
                </div>
              </div>
              <ModalFooter>
                <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button colorScheme="primary" onClick={() => setModalOpen(false)}>Confirm</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* ── Drawer ──────────────────────────────────────────────────── */}
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} side="right" size="md">
            <DrawerContent onClose={() => setDrawerOpen(false)}>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {['Dashboard', 'Projects', 'Team', 'Analytics', 'Settings', 'Help'].map((item, i) => (
                    <button
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: i === 0 ? 'var(--color-primary)' : 'transparent',
                        color: i === 0 ? 'white' : 'var(--color-text-primary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (i !== 0) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface)'; }}
                      onMouseLeave={e => { if (i !== 0) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                    >
                      <span style={{ opacity: i === 0 ? 1 : 0.6 }}>
                        {['◆', '◇', '△', '○', '□', '?'][i]}
                      </span>
                      {item}
                    </button>
                  ))}
                </nav>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" size="sm" onClick={() => setDrawerOpen(false)}>Close</Button>
                <Button size="sm" colorScheme="primary">Save Changes</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* ── Footer ─────────────────────────────────────────────────── */}
          <footer className="demo-footer">
            <p>MoodUI · Built with Vanilla Extract · Zero runtime dependencies</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Mount
// ──────────────────────────────────────────────────────────────────────────────

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
