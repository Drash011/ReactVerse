
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import {
  Users,
  UserPlus,
  UserRoundPen,
  Trash2,
  Search,
  GraduationCap,
  UserCheck,
  UserX,
  Plus,
  Pencil,
  Eye,
  X,
  Download,
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Wallet,
  FileText,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  ArrowUpRight
} from "lucide-react";
import "./styles/global.css";

const initialStudents = [
  {
    id: "STU1001",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "9876543210",
    course: "B.Tech Computer Science",
    year: "1st Year",
    status: "Active",
    gender: "Male",
    dob: "2006-03-15",
    enrollmentDate: "2026-01-10",
    address: "Adajan, Surat, Gujarat"
  },
  {
    id: "STU1002",
    name: "Diya Patel",
    email: "diya.patel@example.com",
    phone: "9876543211",
    course: "BCA",
    year: "2nd Year",
    status: "Active",
    gender: "Female",
    dob: "2005-07-21",
    enrollmentDate: "2025-07-12",
    address: "Vesu, Surat, Gujarat"
  },
  {
    id: "STU1003",
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    phone: "9876543212",
    course: "B.Sc IT",
    year: "1st Year",
    status: "Active",
    gender: "Male",
    dob: "2006-11-08",
    enrollmentDate: "2026-01-15",
    address: "City Light, Surat, Gujarat"
  },
  {
    id: "STU1004",
    name: "Sneha Verma",
    email: "sneha.verma@example.com",
    phone: "9876543213",
    course: "B.Tech Information Technology",
    year: "3rd Year",
    status: "Inactive",
    gender: "Female",
    dob: "2004-09-02",
    enrollmentDate: "2024-08-18",
    address: "Pal, Surat, Gujarat"
  },
  {
    id: "STU1005",
    name: "Kunal Shah",
    email: "kunal.shah@example.com",
    phone: "9876543214",
    course: "BCA",
    year: "2nd Year",
    status: "Active",
    gender: "Male",
    dob: "2005-12-19",
    enrollmentDate: "2025-07-20",
    address: "Piplod, Surat, Gujarat"
  }
];

function readStudents() {
  try {
    const saved = localStorage.getItem("student-records");
    return saved ? JSON.parse(saved) : initialStudents;
  } catch {
    return initialStudents;
  }
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="/" className="brand">
        <span className="brand-icon">
          <GraduationCap size={27} />
        </span>

        <span>
          <strong>Student Portal</strong>
          <small>Manage · Learn · Grow</small>
        </span>
      </a>

      <nav className="sidebar-nav">
        <a href="/" className="nav-link">
          <LayoutDashboard size={19} />
          Dashboard
        </a>

        <a href="/" className="nav-link active">
          <Users size={19} />
          Students
        </a>

        <a href="/" className="nav-link">
          <BookOpen size={19} />
          Courses
        </a>

        <a href="/" className="nav-link">
          <CalendarDays size={19} />
          Attendance
        </a>

        <a href="/" className="nav-link">
          <FileText size={19} />
          Exams
        </a>

        <a href="/" className="nav-link">
          <Wallet size={19} />
          Fees
        </a>

        <a href="/" className="nav-link">
          <Settings size={19} />
          Settings
        </a>
      </nav>

      <div className="sidebar-bottom">
        <div className="admin-profile">
          <div className="admin-avatar">AD</div>
          <div>
            <strong>Admin</strong>
            <small>admin@campus.edu</small>
          </div>
        </div>

        <button
          className="nav-link logout-button"
          onClick={() => alert("You are using the demo portal.")}
        >
          <LogOut size={19} />
          Log out
        </button>
      </div>
    </aside>
  );
}

function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={19} />
        <span>Student management dashboard</span>
      </div>

      <div className="topbar-right">
        <button
          className="icon-button"
          aria-label="Notifications"
          onClick={() => alert("You are all caught up!")}
        >
          <Bell size={20} />
        </button>

        <div className="profile-menu">
          <div className="admin-avatar">AD</div>
          <strong>Admin</strong>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, icon: Icon, color, note }) {
  return (
    <article className={`stat-card ${color}`}>
      <div className="stat-icon">
        <Icon size={24} />
      </div>

      <div className="stat-info">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
    </article>
  );
}

function StudentRecords({ students, onDelete }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const courses = [
    ...new Set(students.map((student) => student.course))
  ];

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(query) ||
      student.id.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query);

    const matchesCourse =
      courseFilter === "All Courses" ||
      student.course === courseFilter;

    const matchesStatus =
      statusFilter === "All Status" ||
      student.status === statusFilter;

    return matchesSearch && matchesCourse && matchesStatus;
  });

  const exportCSV = () => {
    const headers = [
      "Student ID",
      "Name",
      "Email",
      "Phone",
      "Course",
      "Year",
      "Status"
    ];

    const rows = filteredStudents.map((student) => [
      student.id,
      student.name,
      student.email,
      student.phone,
      student.course,
      student.year,
      student.status
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((value) =>
            `"${String(value ?? "").replaceAll('"', '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" })
    );

    const link = document.createElement("a");
    link.href = url;
    link.download = "student-records.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-content page-enter">
      <div className="page-heading">
        <div>
          <span className="eyebrow">CAMPUS MANAGEMENT</span>
          <h1>
            <Users size={27} />
            Student Records
          </h1>
          <p>Manage all student information in one place.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/students/add")}
        >
          <Plus size={19} />
          Add Student
        </button>
      </div>

      <section className="stats-grid">
        <StatCard
          title="Total Students"
          value={students.length}
          icon={Users}
          color="blue"
          note="All registered students"
        />

        <StatCard
          title="Active Students"
          value={
            students.filter((s) => s.status === "Active").length
          }
          icon={UserCheck}
          color="green"
          note="Currently active"
        />

        <StatCard
          title="Inactive Students"
          value={
            students.filter((s) => s.status === "Inactive").length
          }
          icon={UserX}
          color="rose"
          note="Currently inactive"
        />

        <StatCard
          title="Courses"
          value={courses.length}
          icon={GraduationCap}
          color="violet"
          note="Available in records"
        />
      </section>

      <section className="records-card">
        <div className="records-toolbar">
          <div>
            <h2>
              All Students
              <span className="count-badge">{filteredStudents.length}</span>
            </h2>
            <p>Search, view, edit, and manage student profiles.</p>
          </div>

          <button className="secondary-button" onClick={exportCSV}>
            <Download size={16} />
            Export CSV
          </button>
        </div>

        <div className="filters">
          <label className="search-field">
            <Search size={17} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, email or ID..."
            />
          </label>

          <select
            value={courseFilter}
            onChange={(event) => setCourseFilter(event.target.value)}
            aria-label="Filter by course"
          >
            <option>All Courses</option>
            {courses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            aria-label="Filter by status"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Student ID</th>
                <th>Email</th>
                <th>Course</th>
                <th>Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="student-identity">
                      <span className="student-avatar">
                        {student.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                      <strong>{student.name}</strong>
                    </div>
                  </td>

                  <td>{student.id}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>

                  <td>
                    <span
                      className={`status-pill ${student.status.toLowerCase()}`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <div className="row-actions">
                      <button
                        className="action-button view"
                        title="View student"
                        onClick={() =>
                          navigate(`/students/edit/${student.id}`)
                        }
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="action-button edit"
                        title="Edit student"
                        onClick={() =>
                          navigate(`/students/edit/${student.id}`)
                        }
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        className="action-button delete"
                        title="Delete student"
                        onClick={() => onDelete(student)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="7" className="empty-message">
                    No students found. Try another search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          Showing {filteredStudents.length} of {students.length} students
          <span>All records are saved in your browser.</span>
        </div>
      </section>
    </div>
  );
}

function StudentForm({ students, onSave, mode }) {
  const navigate = useNavigate();
  const { studentId } = useLocation().pathname.includes("/edit/")
    ? { studentId: decodeURIComponent(window.location.pathname.split("/").pop()) }
    : { studentId: null };

  const existingStudent = students.find(
    (student) => student.id === studentId
  );

  const [form, setForm] = useState(() =>
    existingStudent
      ? { ...existingStudent }
      : {
          id: "",
          name: "",
          email: "",
          phone: "",
          course: "",
          year: "",
          status: "Active",
          gender: "",
          dob: "",
          enrollmentDate: new Date().toISOString().slice(0, 10),
          address: ""
        }
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && !existingStudent) {
      navigate("/", { replace: true });
    }
  }, [mode, existingStudent, navigate]);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.id.trim()) nextErrors.id = "Student ID is required.";
    if (!form.name.trim()) nextErrors.name = "Name is required.";

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.course) nextErrors.course = "Choose a course.";
    if (!form.year) nextErrors.year = "Choose an academic year.";

    if (!form.address.trim()) {
      nextErrors.address = "Address is required.";
    }

    if (
      students.some(
        (student) =>
          student.id.toLowerCase() === form.id.trim().toLowerCase() &&
          student.id !== existingStudent?.id
      )
    ) {
      nextErrors.id = "This student ID already exists.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSave({
      ...form,
      id: form.id.trim(),
      name: form.name.trim(),
      email: form.email.trim(),
      avatar: form.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    });
  };

  return (
    <div className="page-content page-enter">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Student Records
      </button>

      <div className="page-heading form-page-heading">
        <div>
          <span className="eyebrow">STUDENT MANAGEMENT</span>
          <h1>{mode === "edit" ? "Edit Student" : "Add New Student"}</h1>
          <p>
            {mode === "edit"
              ? "Update the existing student's information."
              : "Complete the form to register a new student."}
          </p>
        </div>
      </div>

      <div className="form-layout">
        <aside className="form-promo">
          <div className="promo-icon">
            <GraduationCap size={42} />
          </div>
          <span>STUDENT PORTAL</span>
          <h2>
            {mode === "edit"
              ? "Keep every detail up to date."
              : "Every student has a story."}
          </h2>
          <p>
            Maintain accurate student information for a better campus
            experience.
          </p>
          <div className="promo-decoration">✦</div>
        </aside>

        <form className="student-form" onSubmit={submitForm}>
          <div className="form-section-title">
            <UserPlus size={19} />
            <div>
              <h2>Personal Information</h2>
              <p>Basic details about the student</p>
            </div>
          </div>

          <div className="form-grid">
            <label className="form-field">
              Full Name *
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter full name"
              />
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label className="form-field">
              Student ID *
              <input
                name="id"
                value={form.id}
                onChange={updateField}
                disabled={mode === "edit"}
                placeholder="e.g. STU1006"
              />
              {errors.id && <small>{errors.id}</small>}
            </label>

            <label className="form-field">
              Email Address *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="student@example.com"
              />
              {errors.email && <small>{errors.email}</small>}
            </label>

            <label className="form-field">
              Phone Number
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Enter phone number"
              />
            </label>

            <label className="form-field">
              Date of Birth
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={updateField}
              />
            </label>

            <label className="form-field">
              Gender
              <select
                name="gender"
                value={form.gender}
                onChange={updateField}
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <div className="form-section-title section-divider">
            <GraduationCap size={19} />
            <div>
              <h2>Academic Information</h2>
              <p>Course and enrollment details</p>
            </div>
          </div>

          <div className="form-grid">
            <label className="form-field">
              Course *
              <select
                name="course"
                value={form.course}
                onChange={updateField}
              >
                <option value="">Select course</option>
                <option>B.Tech Computer Science</option>
                <option>B.Tech Information Technology</option>
                <option>BCA</option>
                <option>B.Sc IT</option>
                <option>B.Sc Computer Science</option>
                <option>B.Com</option>
                <option>MBA</option>
              </select>
              {errors.course && <small>{errors.course}</small>}
            </label>

            <label className="form-field">
              Academic Year *
              <select
                name="year"
                value={form.year}
                onChange={updateField}
              >
                <option value="">Select year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>5th Year</option>
              </select>
              {errors.year && <small>{errors.year}</small>}
            </label>

            <label className="form-field">
              Enrollment Date
              <input
                type="date"
                name="enrollmentDate"
                value={form.enrollmentDate}
                onChange={updateField}
              />
            </label>

            <label className="form-field">
              Status
              <select
                name="status"
                value={form.status}
                onChange={updateField}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
          </div>

          <div className="form-section-title section-divider">
            <UserRoundPen size={19} />
            <div>
              <h2>Address Information</h2>
              <p>Contact address of the student</p>
            </div>
          </div>

          <label className="form-field">
            Full Address *
            <textarea
              name="address"
              value={form.address}
              onChange={updateField}
              placeholder="Enter street, city, and state"
              rows="3"
            />
            {errors.address && <small>{errors.address}</small>}
          </label>

          <div className="form-footer">
            <span>* Required fields</span>

            <div>
              <button
                type="button"
                className="secondary-button"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>

              <button type="submit" className="primary-button">
                {mode === "edit" ? (
                  <UserRoundPen size={17} />
                ) : (
                  <Plus size={18} />
                )}

                {mode === "edit" ? "Save Changes" : "Add Student"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function AppContent() {
  const [students, setStudents] = useState(readStudents);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("student-records", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((current) => [student, ...current]);
    navigate("/");
  };

  const updateStudent = (updatedStudent) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );

    navigate("/");
  };

  const deleteStudent = () => {
    setStudents((current) =>
      current.filter((student) => student.id !== deleteTarget.id)
    );

    setDeleteTarget(null);
  };

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-area">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <StudentRecords
                students={students}
                onDelete={setDeleteTarget}
              />
            }
          />

          <Route
            path="/students/add"
            element={
              <StudentForm
                key="add"
                students={students}
                mode="add"
                onSave={addStudent}
              />
            }
          />

          <Route
            path="/students/edit/:studentId"
            element={
              <StudentForm
                key={location.pathname}
                students={students}
                mode="edit"
                onSave={updateStudent}
              />
            }
          />
        </Routes>

        <footer className="app-footer">
          <span>© 2026 Student Portal</span>
          <span>Built for better campus management.</span>
        </footer>
      </main>

      {deleteTarget && (
        <div className="modal-backdrop">
          <div className="confirm-modal">
            <button
              className="modal-close"
              onClick={() => setDeleteTarget(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="confirm-icon">
              <Trash2 size={25} />
            </div>

            <h2>Delete Student?</h2>

            <p>
              Are you sure you want to delete{" "}
              <strong>{deleteTarget.name}</strong>? This action cannot
              be undone.
            </p>

            <div className="modal-actions">
              <button
                className="secondary-button"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>

              <button
                className="danger-button"
                onClick={deleteStudent}
              >
                Delete Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
