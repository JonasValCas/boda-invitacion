import './AttendanceSelector.css'

function AttendanceSelector({
  value,
  onChange,
}) {
  return (
    <div className="attendance-selector">

      <button
        type="button"
        className={`attendance-option ${
          value === 'yes'
            ? 'attendance-option--active'
            : ''
        }`}
        onClick={() => onChange('yes')}
        aria-pressed={value === 'yes'}
      >
        <span className="attendance-option__icon">
          ✓
        </span>

        <span>
          Sí, asistiré
        </span>
      </button>


      <button
        type="button"
        className={`attendance-option ${
          value === 'no'
            ? 'attendance-option--active'
            : ''
        }`}
        onClick={() => onChange('no')}
        aria-pressed={value === 'no'}
      >
        <span className="attendance-option__icon">
          ×
        </span>

        <span>
          No podré asistir
        </span>
      </button>

    </div>
  )
}

export default AttendanceSelector