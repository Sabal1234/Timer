const client = {
  getTimers: async function (success) {
    try {
            const response = await fetch('/api/timers', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            success(data); 
        } catch (error) {
            console.error("Error fetching timers:", error);
        }
  },
};

export default client;
