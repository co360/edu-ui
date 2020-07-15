import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { DiGithubBadge } from 'react-icons/di'

import HtmlViewer from './HtmlViewer'

const CourseCard = ({
  title,
  description,
  image,
  slug,
  githubRepo,
  lectureId,
  courseViewMode,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link to={`/courses/${slug}`}>{title}</Link>
        </div>

        <HtmlViewer className="text-gray-700 text-base" data={description} />
      </div>
      <div className="px-6 py-2">
        {courseViewMode && (
          <>
            <Link
              className="block bg-purple-800 text-white text-center hover:bg-purple-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
              style={{ transition: 'all .15s ease' }}
              to={`/courses/${slug}/lectures/${lectureId}`}
            >
              Start Learning
            </Link>
            {githubRepo && (
              <div className="py-4">
                <a
                  className="flex flex-row-reverse items-center justify-center bg-gray-800 text-white text-center hover:bg-gray-900 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                  style={{ transition: 'all .15s ease' }}
                  href={githubRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiGithubBadge size={28} />
                  <span>View Code</span>
                </a>
              </div>
            )}
          </>
        )}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubRepo: PropTypes.string,
  slug: PropTypes.string.isRequired,
  lectureId: PropTypes.number,
  courseViewMode: PropTypes.bool,
}

CourseCard.defaultProps = {
  title: '',
  githubRepo: '',
  lectureId: 0,
  courseViewMode: false,
}

export default CourseCard
