import { useState, useReducer } from "react";

// ─── Constants ───────────────────────────────────────────────
const ALL_TIMES = [
  "08:00","09:00","10:00","11:00","12:00",
  "13:00","14:00","15:00","16:00","17:00",
  "18:00","19:00","20:00","21:00"
];
const OCCASIONS = ["Birthday","Date Night","Business","Celebration","Just Dinner"];
const SEATING   = ["Indoor","Outdoor","Bar"];

// ─── Reducer (as required by the course) ─────────────────────
export function initializeTimes() {
  return ALL_TIMES;
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_DATE") {
    const day = new Date(action.date).getDay();
    // Weekends have fewer slots (simulate real availability)
    return day === 0 || day === 6
      ? ALL_TIMES.filter((_, i) => i % 2 === 0)
      : ALL_TIMES;
  }
  return state;
}

// ─── Styles (inline so it's a single file) ───────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "#f0ede6",
    fontFamily: "'Karla', sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    background: "#495E57",
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "'Markazi Text', serif",
    fontSize: 32,
    color: "#F4CE14",
    fontWeight: 700,
    margin: 0,
  },
  navSub: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    letterSpacing: 1,
  },
  hero: {
    background: "#495E57",
    padding: "48px 32px 56px",
    textAlign: "center",
  },
  heroTitle: {
    fontFamily: "'Markazi Text', serif",
    fontSize: 52,
    color: "#F4CE14",
    margin: 0,
    lineHeight: 1,
  },
  heroSub: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    marginTop: 8,
  },
  main: {
    maxWidth: 560,
    margin: "-32px auto 48px",
    width: "100%",
    padding: "0 16px",
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
    overflow: "hidden",
  },
  cardHeader: {
    background: "#495E57",
    padding: "24px 32px",
    color: "white",
  },
  cardHeaderTitle: {
    fontFamily: "'Markazi Text', serif",
    fontSize: 28,
    margin: 0,
  },
  cardHeaderSub: {
    fontSize: 13,
    opacity: 0.75,
    marginTop: 4,
  },
  progressBar: {
    display: "flex",
    gap: 6,
    marginTop: 16,
  },
  progressStep: (active) => ({
    flex: 1,
    height: 4,
    borderRadius: 4,
    background: active ? "#F4CE14" : "rgba(255,255,255,0.25)",
    transition: "background 0.3s",
  }),
  cardBody: {
    padding: "28px 32px",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#888",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: "13px 14px",
    border: "2px solid #e8e5de",
    borderRadius: 10,
    fontFamily: "'Karla', sans-serif",
    fontSize: 15,
    color: "#333",
    background: "#faf9f6",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  inputError: {
    borderColor: "#e74c3c",
  },
  errorMsg: {
    color: "#e74c3c",
    fontSize: 12,
    marginTop: 4,
    fontWeight: 600,
  },
  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 8,
  },
  timeBtn: (selected) => ({
    padding: "10px 6px",
    border: `2px solid ${selected ? "#495E57" : "#e8e5de"}`,
    borderRadius: 10,
    background: selected ? "#495E57" : "#faf9f6",
    color: selected ? "white" : "#888",
    fontFamily: "'Karla', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.2s",
  }),
  guestRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "#faf9f6",
    border: "2px solid #e8e5de",
    borderRadius: 10,
    padding: "10px 14px",
  },
  guestBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "none",
    background: "#495E57",
    color: "white",
    fontSize: 20,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    lineHeight: 1,
  },
  guestCount: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    color: "#333",
    fontFamily: "'Markazi Text', serif",
  },
  pillRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  pill: (selected) => ({
    padding: "8px 16px",
    border: `2px solid ${selected ? "#495E57" : "#e8e5de"}`,
    borderRadius: 999,
    background: selected ? "#495E57" : "#faf9f6",
    color: selected ? "white" : "#888",
    fontFamily: "'Karla', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  btnRow: {
    padding: "0 32px 28px",
    display: "flex",
    gap: 12,
  },
  btnPrimary: {
    flex: 1,
    padding: "14px 20px",
    background: "#F4CE14",
    color: "#495E57",
    border: "none",
    borderRadius: 12,
    fontFamily: "'Karla', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
  btnSecondary: {
    padding: "14px 20px",
    background: "transparent",
    color: "#495E57",
    border: "2px solid #495E57",
    borderRadius: 12,
    fontFamily: "'Karla', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },
  summaryBox: {
    background: "#faf9f6",
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
    border: "1px solid #eee",
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: 14,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
    fontSize: 15,
  },
  summaryKey: { color: "#888" },
  summaryVal: { fontWeight: 700, color: "#333" },
  successScreen: {
    background: "linear-gradient(160deg, #495E57 0%, #3a4a44 100%)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 32px",
    textAlign: "center",
    minHeight: 480,
  },
  successEmoji: {
    fontSize: 72,
    marginBottom: 16,
    animation: "bounce 1s ease infinite alternate",
  },
  successTitle: {
    fontFamily: "'Markazi Text', serif",
    fontSize: 42,
    margin: "0 0 8px",
  },
  successSub: {
    opacity: 0.8,
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 28,
  },
  successCard: {
    background: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: "18px 24px",
    width: "100%",
    textAlign: "left",
    marginBottom: 24,
  },
  successRow: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: "5px 0",
    fontSize: 15,
  },
  successKey: { opacity: 0.65, minWidth: 80 },
  refBadge: {
    background: "#F4CE14",
    color: "#495E57",
    padding: "4px 14px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 13,
    display: "inline-block",
    marginTop: 8,
  },
};

// ─── Main Component ───────────────────────────────────────────
export default function LittleLemonBooking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [step, setStep]           = useState(1);
  const [errors, setErrors]       = useState({});
  const [refNumber]               = useState(
    "LL-" + Date.now().toString().slice(-8)
  );

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 2,
    seating: "Indoor",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requests: "",
  });

  // ── Handlers ────────────────────────────────────────────────
  const set = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (field === "date") dispatch({ type: "UPDATE_DATE", date: value });
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!form.date)  e.date = "Please select a date";
    if (!form.time)  e.time = "Please select a time slot";
    if (form.guests < 1 || form.guests > 10) e.guests = "Guests must be between 1 and 10";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim())  e.lastName  = "Last name is required";
    if (!form.email.trim())     e.email     = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.phone.trim())     e.phone     = "Phone number is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  // ── Render ───────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;700&family=Karla:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f0ede6; }
        @keyframes bounce {
          from { transform: translateY(0); }
          to   { transform: translateY(-10px); }
        }
        button:hover { opacity: 0.92; }
      `}</style>

      <div style={S.page}>

        {/* NAV */}
        <nav style={S.nav}>
          <div>
            <h1 style={S.logo}>Little Lemon</h1>
            <p style={S.navSub}>Mediterranean Restaurant · Chicago</p>
          </div>
        </nav>

        {/* HERO */}
        <div style={S.hero}>
          <h2 style={S.heroTitle}>Reserve a Table</h2>
          <p style={S.heroSub}>Book your table in under 60 seconds — no phone calls needed</p>
        </div>

        {/* FORM CARD */}
        <main style={S.main}>
          <div style={S.card}>

            {step < 3 && (
              <div style={S.cardHeader}>
                <h3 style={S.cardHeaderTitle}>
                  {step === 1 ? "Booking Details" : "Your Information"}
                </h3>
                <p style={S.cardHeaderSub}>Step {step} of 2</p>
                <div style={S.progressBar}>
                  <div style={S.progressStep(step >= 1)} />
                  <div style={S.progressStep(step >= 2)} />
                </div>
              </div>
            )}

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <form onSubmit={handleSubmit} noValidate aria-label="Table booking form">

                <div style={S.cardBody}>

                  {/* Date */}
                  <div style={S.formGroup}>
                    <label htmlFor="date" style={S.label}>Date</label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      style={{ ...S.input, ...(errors.date ? S.inputError : {}) }}
                      aria-required="true"
                      aria-describedby={errors.date ? "date-error" : undefined}
                    />
                    {errors.date && <p id="date-error" style={S.errorMsg}>{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div style={S.formGroup}>
                    <label style={S.label}>Time Slot</label>
                    <div style={S.timeGrid} role="group" aria-label="Available time slots">
                      {availableTimes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => set("time", t)}
                          style={S.timeBtn(form.time === t)}
                          aria-pressed={form.time === t}
                          aria-label={`Select time ${t}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.time && <p style={S.errorMsg}>{errors.time}</p>}
                  </div>

                  {/* Guests */}
                  <div style={S.formGroup}>
                    <label htmlFor="guests" style={S.label}>Number of Guests</label>
                    <div style={S.guestRow}>
                      <button
                        type="button"
                        style={S.guestBtn}
                        onClick={() => set("guests", Math.max(1, form.guests - 1))}
                        aria-label="Decrease guests"
                      >−</button>
                      <span style={S.guestCount} aria-live="polite" aria-label={`${form.guests} guests`}>
                        {form.guests} {form.guests === 1 ? "Guest" : "Guests"}
                      </span>
                      <button
                        type="button"
                        style={S.guestBtn}
                        onClick={() => set("guests", Math.min(10, form.guests + 1))}
                        aria-label="Increase guests"
                      >+</button>
                    </div>
                    {errors.guests && <p style={S.errorMsg}>{errors.guests}</p>}
                  </div>

                  {/* Seating */}
                  <div style={S.formGroup}>
                    <label style={S.label}>Seating Preference</label>
                    <div style={S.pillRow} role="group" aria-label="Seating preference">
                      {SEATING.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => set("seating", s)}
                          style={S.pill(form.seating === s)}
                          aria-pressed={form.seating === s}
                        >
                          {s === "Indoor" ? "🏠" : s === "Outdoor" ? "🌿" : "🍸"} {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Occasion */}
                  <div style={S.formGroup}>
                    <label style={S.label}>Occasion (Optional)</label>
                    <div style={S.pillRow} role="group" aria-label="Occasion type">
                      {OCCASIONS.map((o) => (
                        <button
                          key={o}
                          type="button"
                          onClick={() => set("occasion", form.occasion === o ? "" : o)}
                          style={S.pill(form.occasion === o)}
                          aria-pressed={form.occasion === o}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                <div style={S.btnRow}>
                  <button type="submit" style={S.btnPrimary} aria-label="Continue to step 2">
                    Continue →
                  </button>
                </div>
              </form>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <form onSubmit={handleSubmit} noValidate aria-label="Personal information form">
                <div style={S.cardBody}>

                  {/* Summary */}
                  <div style={S.summaryBox}>
                    <p style={S.summaryLabel}>📋 Booking Summary</p>
                    {[
                      ["Date",    form.date],
                      ["Time",    form.time],
                      ["Guests",  `${form.guests} ${form.guests === 1 ? "Guest" : "Guests"}`],
                      ["Seating", form.seating],
                      ...(form.occasion ? [["Occasion", form.occasion]] : []),
                    ].map(([k, v]) => (
                      <div key={k} style={S.summaryRow}>
                        <span style={S.summaryKey}>{k}</span>
                        <span style={S.summaryVal}>{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* First Name */}
                  <div style={S.formGroup}>
                    <label htmlFor="firstName" style={S.label}>First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="e.g. Sophia"
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      style={{ ...S.input, ...(errors.firstName ? S.inputError : {}) }}
                      aria-required="true"
                    />
                    {errors.firstName && <p style={S.errorMsg}>{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div style={S.formGroup}>
                    <label htmlFor="lastName" style={S.label}>Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="e.g. Martinez"
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      style={{ ...S.input, ...(errors.lastName ? S.inputError : {}) }}
                      aria-required="true"
                    />
                    {errors.lastName && <p style={S.errorMsg}>{errors.lastName}</p>}
                  </div>

                  {/* Email */}
                  <div style={S.formGroup}>
                    <label htmlFor="email" style={S.label}>Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      style={{ ...S.input, ...(errors.email ? S.inputError : {}) }}
                      aria-required="true"
                    />
                    {errors.email && <p style={S.errorMsg}>{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div style={S.formGroup}>
                    <label htmlFor="phone" style={S.label}>Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      style={{ ...S.input, ...(errors.phone ? S.inputError : {}) }}
                      aria-required="true"
                    />
                    {errors.phone && <p style={S.errorMsg}>{errors.phone}</p>}
                  </div>

                  {/* Special Requests */}
                  <div style={S.formGroup}>
                    <label htmlFor="requests" style={S.label}>Special Requests (Optional)</label>
                    <textarea
                      id="requests"
                      rows={3}
                      placeholder="Allergies, accessibility needs, high chair..."
                      value={form.requests}
                      onChange={(e) => set("requests", e.target.value)}
                      style={{ ...S.input, resize: "vertical" }}
                    />
                  </div>

                </div>

                <div style={S.btnRow}>
                  <button
                    type="button"
                    style={S.btnSecondary}
                    onClick={() => setStep(1)}
                    aria-label="Go back to step 1"
                  >← Back</button>
                  <button
                    type="submit"
                    style={S.btnPrimary}
                    aria-label="Confirm reservation"
                  >✓ Confirm Booking</button>
                </div>
              </form>
            )}

            {/* ── STEP 3 — SUCCESS ── */}
            {step === 3 && (
              <div style={S.successScreen} role="alert" aria-live="polite">
                <div style={S.successEmoji}>🍋</div>
                <h2 style={S.successTitle}>You're All Set!</h2>
                <p style={S.successSub}>
                  Your table at Little Lemon has been reserved.<br />
                  A confirmation will be sent to {form.email}.
                </p>

                <div style={S.successCard}>
                  {[
                    ["📅 Date",    form.date],
                    ["🕐 Time",    form.time],
                    ["👥 Guests",  `${form.guests} ${form.guests === 1 ? "Guest" : "Guests"}`],
                    ["🪑 Seating", form.seating],
                    ["👤 Name",   `${form.firstName} ${form.lastName}`],
                  ].map(([k, v]) => (
                    <div key={k} style={S.successRow}>
                      <span style={S.successKey}>{k}</span>
                      <strong>{v}</strong>
                    </div>
                  ))}
                </div>

                <div style={S.refBadge}>Ref # {refNumber}</div>

                <button
                  style={{ ...S.btnPrimary, marginTop: 24, width: "100%", background: "white" }}
                  onClick={() => { setStep(1); setForm({ date:"",time:"",guests:2,seating:"Indoor",occasion:"",firstName:"",lastName:"",email:"",phone:"",requests:"" }); }}
                  aria-label="Make another reservation"
                >
                  ← Make Another Reservation
                </button>
              </div>
            )}

          </div>
        </main>
      </div>
    </>
  );
}
