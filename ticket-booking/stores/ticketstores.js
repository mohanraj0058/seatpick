import create from "zustand";

const useTicketStore = create((set) => ({
  tickets: [],
  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  removeTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((ticket) => ticket.id !== id),
    })),
}));

export default useTicketStore;
