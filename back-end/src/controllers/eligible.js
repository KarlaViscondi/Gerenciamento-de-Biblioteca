import prisma from '../database/client.js';

export async function Eligible(cpf) {
    
    // Verificar reservas ativas e empréstimos ativos, a função calculate é referente sempre a 15 dias uteis (nao considerando feriados)
    const activeReservations = await prisma.reservation.findMany({
        where: {
            cpf,
            reservation_status: 'reserved'
        }
    });

    const activeLoans = await prisma.loan.findMany({ //trocar loan por borrow
        where: {
            cpf,
            loan_status: 'loaned'
        }
    });

    if (activeReservations.length > 0 || activeLoans.length > 0) {
        return false; // reservas ativas ou empréstimos ativos
    }
    
    // verificar cancelamentos
    const cancellations = await prisma.cancellation.findMany({
        where: {
            cpf,
            date: {
                gte: calculate()
            }
        }
    });

    if (cancellations.length >= 2) {
        return false; //  2 ou mais cancelamentos
    }

    // verificar atrasos
    const lateReturns = await prisma.loan.findMany({
        where: {
            cpf,
            return_date: {
                gt: calculate()
            },
            loan_status: 'returned_late' //alterar loan para borrow
        }
    });

    if (lateReturns.length > 0) {
        return false; // devoluções fora do prazo 
    }

    // Verificar disponibilidade do livro para reserva
    const book = await prisma.book.findUnique({
        where: { code_book: code_book }
    });

    if (!book || book.status !== 'available') {
        return false; // não está disponível 
    }

    return true; // elegível
}

function calculate() {
    const today = new Date(); //data atual
    const daysAgo = 15; //dias uteis que vou considerar
    let remainingDays = daysAgo; //dias a subtrair
    
    while (remainingDays > 0) {
        today.setDate(today.getDate() - 1);
        if (today.getDay() !== 0 && today.getDay() !== 6) { //  0 e 6 referente a domingo e sabado respectivamente
            remainingDays--; 
        }
    }
    return today;
    
}
