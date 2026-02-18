import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");
    setSuccess("");

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("username", res.data.username || username);
      localStorage.setItem("isLogin", "true");

      setSuccess("Login Successfully 🎉");

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]  px-4">
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden border border-gray-300">
        <div className="bg-black p-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="mt-2 text-gray-300">Join us and start shopping</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 border border-green-200 rounded text-center">
              {success}
            </div>
          )}

          <div className="relative mb-5">
            <input
              type="text"
              className="w-full px-4 pt-6 pb-2 border rounded-lg"
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500">
              Username
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="email"
              className="w-full px-4 pt-6 pb-2 border rounded-lg"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500">
              Email
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 pt-6 pb-2 border rounded-lg pr-10"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500">
              Password
            </label>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-4 pt-6 pb-2 border rounded-lg pr-10"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500">
              Confirm Password
            </label>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg flex justify-center items-center"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-black font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
