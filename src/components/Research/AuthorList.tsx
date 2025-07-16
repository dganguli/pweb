import React from 'react';

interface AuthorListProps {
  authors?: string[];
  role?: string;
  maxAuthors?: number;
}

export const AuthorList: React.FC<AuthorListProps> = ({ 
  authors, 
  role, 
  maxAuthors = 6 
}) => {
  // If no authors available, fall back to role badge
  if (!authors || authors.length === 0) {
    if (!role) return null;
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        {role}
      </span>
    );
  }

  const formatAuthorName = (author: string): JSX.Element => {
    const isDeepGanguli = author.toLowerCase().includes('deep ganguli');
    
    if (isDeepGanguli) {
      return <span className="font-bold">{author}</span>;
    }
    
    return <span>{author}</span>;
  };

  // Handle author list truncation for long lists
  const renderAuthorList = (): JSX.Element => {
    if (authors.length <= maxAuthors) {
      // Show all authors
      return (
        <>
          {authors.map((author, index) => (
            <React.Fragment key={index}>
              {formatAuthorName(author)}
              {index < authors.length - 1 && ', '}
            </React.Fragment>
          ))}
        </>
      );
    }

    // Find Deep Ganguli's position
    const deepIndex = authors.findIndex(author => 
      author.toLowerCase().includes('deep ganguli')
    );
    
    // Strategy for long lists: show first 2, Deep (if not in first 2), last 1, with truncation
    const firstTwo = authors.slice(0, 2);
    const lastAuthor = authors[authors.length - 1];
    
    // Check if Deep is in first 2 or is the last author
    const deepInVisible = deepIndex <= 1 || deepIndex === authors.length - 1;
    
    // Calculate hidden count more precisely
    let visibleCount = 2; // first 2 authors always shown
    if (deepIndex === authors.length - 1) {
      // Deep is last author, so we show: first 2 + hidden + Deep
      visibleCount += 1; // Deep as last
    } else {
      // Normal case: first 2 + hidden + last author
      visibleCount += 1; // last author
      if (!deepInVisible && deepIndex !== -1) {
        visibleCount += 1; // add Deep separately
      }
    }
    const hiddenCount = authors.length - visibleCount;
    
    return (
      <>
        {/* First two authors */}
        {firstTwo.map((author, index) => (
          <React.Fragment key={index}>
            {formatAuthorName(author)}
            {index < firstTwo.length - 1 && ', '}
          </React.Fragment>
        ))}
        
        {/* Deep Ganguli if not already shown and exists */}
        {!deepInVisible && deepIndex !== -1 && (
          <>
            {', '}
            {formatAuthorName(authors[deepIndex])}
          </>
        )}
        
        {/* Truncation indicator */}
        {hiddenCount > 0 && (
          <span className="text-gray-500">
            , [{hiddenCount} additional authors]
          </span>
        )}
        
        {/* Last author (always show if we have more than 2 authors) */}
        {authors.length > 2 && (
          <>
            {', '}
            {formatAuthorName(lastAuthor)}
          </>
        )}
      </>
    );
  };

  return (
    <div className="text-sm text-gray-600 mt-1">
      {renderAuthorList()}
    </div>
  );
};

export default AuthorList;