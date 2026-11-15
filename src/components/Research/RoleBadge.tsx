import { RoleBadgeProps } from '../../types';

export const RoleBadge = ({ role }: RoleBadgeProps) => {
  if (!role) return null;

  const getBadgeColors = () => {
    switch (role.toLowerCase()) {
      case 'first author':
        return 'bg-pink-50/30 text-pink-500/60 border-pink-100/30';
      case 'last author':
        return 'bg-orange-50/30 text-orange-500/60 border-orange-100/30';
      case 'middle author - evals':
        return 'bg-yellow-50/30 text-yellow-600/60 border-yellow-100/30';
      default:
        return 'bg-gray-50/30 text-gray-400/60 border-gray-100/30';
    }
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${getBadgeColors()}`}>
      {role}
    </span>
  );
};