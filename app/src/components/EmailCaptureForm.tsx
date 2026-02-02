import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  age?: string;
  email?: string;
}

export function EmailCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Must be at least 2 characters';
    }

    const ageNum = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = 'Must be 18-100';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          age: parseInt(formData.age),
          email: formData.email,
          created_at: new Date().toISOString(),
        }]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', age: '', email: '' });
    } catch (error) {
      console.error('Supabase error:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Welcome to SpareVest!
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          We'll notify you at launch.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 lg:p-8 space-y-4"
    >
      {/* Row 1: First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full h-12 px-4 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
              errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600'
            }`}
          />
          {errors.firstName && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full h-12 px-4 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
              errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600'
            }`}
          />
          {errors.lastName && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Age & Email */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1.5 col-span-1">
          <label htmlFor="age" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min="18"
            max="100"
            placeholder="25"
            value={formData.age}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full h-12 px-4 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
              errors.age ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600'
            }`}
          />
          {errors.age && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.age}
            </p>
          )}
        </div>

        <div className="space-y-1.5 col-span-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full h-12 px-4 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
              errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Submit Error */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
        >
          <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {submitError}
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Securing your spot...
          </span>
        ) : (
          'Secure My Spot'
        )}
      </motion.button>

      <p className="text-xs text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
        <CheckCircle className="w-3 h-3" />
        No spam. Unsubscribe anytime.
      </p>
    </motion.form>
  );
}
