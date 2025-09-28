import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X, FileText, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

interface JobApplicationFormProps {
  jobTitle?: string;
  onClose?: () => void;
}

export function JobApplicationForm({ jobTitle, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: jobTitle || '',
    experience: '',
    currentCompany: '',
    expectedSalary: '',
    coverLetter: '',
    linkedinProfile: '',
    portfolio: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        setStatusMessage('❌ File size must be less than 1MB');
        return;
      }
      const allowedTypes = ['application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setStatusMessage('❌ Please upload a PDF');
        return;
      }
      setResumeFile(file);
      setStatusMessage('');
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setStatusMessage('❌ Please upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const data = new FormData();
      data.append('resume', resumeFile);
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await axios.post('https://bytesflareinfotech-backend.onrender.com/api/careers/apply', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Show success animation for any successful response (200-299)
      if (res.status >= 200 && res.status < 300) {
        setShowSuccessAnimation(true);
        setStatusMessage('✅ Application submitted successfully!');
      
        // Hide animation and reset form after 3s
        setTimeout(() => {
          setShowSuccessAnimation(false);
      
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            jobTitle: jobTitle || '',
            experience: '',
            currentCompany: '',
            expectedSalary: '',
            coverLetter: '',
            linkedinProfile: '',
            portfolio: '',
          });
          setResumeFile(null);
          const fileInput = document.getElementById('resume') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
        }, 3000);
      } else {
        setStatusMessage('❌ Unexpected response from server. Please try again.');
      }
      
    } catch (error) {
      console.error(error);
      setStatusMessage('❌ Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Success animation overlay */}
      {showSuccessAnimation && (
        <div className="fixed inset-0 bg-green-100 bg-opacity-95 z-[60] flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mb-4 animate-bounce mx-auto" />
            <p className="text-green-700 font-semibold text-xl mb-2">Form Submitted Successfully!</p>
            <p className="text-green-600 text-sm">Thank you for your application!</p>
          </div>
        </div>
      )}

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">

        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-slate-800">
            Apply for {jobTitle || 'Position'}
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                <InputField label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} />
                <InputField label="Job Title *" name="jobTitle" value={formData.jobTitle} onChange={handleChange} readOnly />
              </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience *</label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <InputField label="Current Company" name="currentCompany" value={formData.currentCompany} onChange={handleChange} />
              </div>
              <InputField label="Expected Salary (Optional)" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} />
            </div>

            {/* Resume Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Resume Upload</h3>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <input type="file" id="resume" onChange={handleFileChange} className="hidden" />
                <label htmlFor="resume" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">{resumeFile ? 'File selected' : 'Click to upload resume'}</p>
                  <p className="text-sm text-slate-500">PDF(Max 1MB)</p>
                </label>
              </div>
              {resumeFile && (
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-slate-500 mr-2" />
                    <span className="text-sm text-slate-700">{resumeFile.name}</span>
                    <span className="text-xs text-slate-500 ml-2">({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={removeFile}><X className="h-4 w-4" /></Button>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <InputField label="LinkedIn Profile" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} />
              <InputField label="Portfolio/Website" name="portfolio" value={formData.portfolio} onChange={handleChange} />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter</label>
                <Textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Cover letter..." rows={4} required />
              </div>
            </div>

            {/* Submit */}
            <div className="space-y-4">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                {isSubmitting ? 'Submitting...' : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
              </Button>
              
              {statusMessage && <p className={`text-center text-sm ${statusMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>{statusMessage}</p>}
            </div>

          </form>
        </CardContent>
      </Card>
      </div>

      {/* Tailwind keyframes for fadeInOut */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            10%, 90% { opacity: 1; }
          }
          .animate-fadeInOut {
            animation: fadeInOut 3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}

// Reusable input field
const InputField = ({ label, name, value, onChange, type = 'text', readOnly = false }: any) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <Input name={name} type={type} value={value} onChange={onChange} readOnly={readOnly} placeholder={label} />
  </div>
);
