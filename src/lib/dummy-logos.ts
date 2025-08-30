export const dummyLogos = [
  {
    name: "University of Excellence",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDVMOTUgMzBMNTAgNTVMNSAzMEw1MCA1WiIgZmlsbD0iIzcyMmU2MyIvPjxwYXRoIGQ9Ik0yMCA0MEgyNVY4MEgyMFY0MFoiIGZpbGw9IiM3MjJlNjMiLz48cGF0aCBkPSJNNzUgNDBIODBWODBINzVWNDBaIiBmaWxsPSIjNzIyZTYzIi8+PHBhdGggZD0iTTUgOTBIOTVWOTVINVY5MFoiIGZpbGw9IiM3MjJlNjMiLz48L3N2Zz4="
  },
  {
    name: "Tech Institute",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTMwIDUwTDQ1IDY1TDcwIDQwIiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "Global Academy",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTIwIDUwSDgwTTUwIDIwVjgwIiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "Innovation University",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMjAiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+"
  },
  {
    name: "Future College",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDkwTDUwIDEwTDkwIDkwSDEwWiIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyMCIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
  },
  {
    name: "Digital Institute",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDgwTDUwIDIwTDgwIDgwIiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjE1IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  }
] as const;

// Duplicate the array to ensure smooth infinite scroll
export const duplicatedLogos = [...dummyLogos, ...dummyLogos];
