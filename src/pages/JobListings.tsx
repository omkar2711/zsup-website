import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ExternalLink,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Building2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Job {
  id: number;
  job_title: string;
  company_name: string;
  company_logo: string;
  experience: string;
  salary: string;
  location: string;
  job_description: string;
  tags: string[];
  job_post_date: string;
  job_url: string;
  rating: string;
}

interface ApiResponse {
  count: number;
  results: Job[];
}

const JobListings = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedSalary, setSalaryRange] = useState('');

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://be-app.ailinc.com/jobs/api/getjobs/'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data: ApiResponse = await response.json();
        setJobs(data.results);
        setFilteredJobs(data.results);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch jobs'
        );
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.job_title.toLowerCase().includes(term) ||
          job.company_name.toLowerCase().includes(term) ||
          job.tags.some((tag) =>
            tag.toLowerCase().includes(term)
          )
      );
    }

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter((job) =>
        job.location
          .toLowerCase()
          .includes(selectedLocation.toLowerCase())
      );
    }

    // Experience filter
    if (selectedExperience) {
      filtered = filtered.filter((job) =>
        job.experience
          .toLowerCase()
          .includes(selectedExperience.toLowerCase())
      );
    }

    // Salary filter
    if (selectedSalary) {
      filtered = filtered.filter((job) =>
        job.salary.toLowerCase().includes(selectedSalary)
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedLocation, selectedExperience, selectedSalary, jobs]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Extract unique filter options
  const locations = Array.from(
    new Set(jobs.map((job) => job.location.split(',')[0].trim()))
  ).sort();
  const experiences = Array.from(
    new Set(
      jobs.map((job) => job.experience).filter((exp) => exp && exp.trim())
    )
  ).sort();
  const salaryRanges = Array.from(new Set(jobs.map((job) => job.salary)));

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedExperience('');
    setSalaryRange('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Job Opportunities
          </h1>
          <p className="text-xl text-blue-100">
            Discover career opportunities from top companies. Filter by location,
            experience, and salary to find your perfect job.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Filter Jobs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search Bar */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search by job title, company, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-2"
                  />
                </div>
              </div>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Experience Filter */}
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Experience</SelectItem>
                  {experiences.map((exp) => (
                    <SelectItem key={exp} value={exp}>
                      {exp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Salary Filter */}
              <Select value={selectedSalary} onValueChange={setSalaryRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Salaries</SelectItem>
                  {salaryRanges.map((salary) => (
                    <SelectItem key={salary} value={salary}>
                      {salary}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters Button */}
            {(searchTerm ||
              selectedLocation ||
              selectedExperience ||
              selectedSalary) && (
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  size="sm"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </motion.div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing{' '}
              <span className="font-semibold text-gray-900">
                {paginatedJobs.length > 0 ? startIndex + 1 : 0}
              </span>
              {' '}-{' '}
              <span className="font-semibold text-gray-900">
                {Math.min(startIndex + itemsPerPage, filteredJobs.length)}
              </span>
              {' '}of{' '}
              <span className="font-semibold text-gray-900">
                {filteredJobs.length}
              </span>
              {' '}jobs
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <span className="ml-2 text-gray-600">Loading opportunities...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* No Results State */}
          {!loading && !error && paginatedJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to find more opportunities
              </p>
            </div>
          )}

          {/* Jobs Grid */}
          {!loading && !error && paginatedJobs.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          {job.company_logo && (
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                              <img
                                src={job.company_logo}
                                alt={job.company_name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '';
                                }}
                              />
                            </div>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {job.tags?.[0] || 'Job'}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {job.job_title}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company_name}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Job Details */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm">{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <DollarSign className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm font-semibold">
                              {job.salary}
                            </span>
                          </div>
                        </div>

                        {/* Description Preview */}
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {job.job_description}
                        </p>

                        {/* Tags */}
                        {job.tags && job.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {job.tags.slice(0, 3).map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {job.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{job.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Posted Date */}
                        <p className="text-xs text-gray-500">
                          Posted: {job.job_post_date}
                        </p>

                        {/* Apply Button */}
                        <Button
                          asChild
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <a
                            href={job.job_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            View & Apply
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-center gap-2 mt-12"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : ''
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobListings;
