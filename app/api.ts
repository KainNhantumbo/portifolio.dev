import axios from 'axios';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Only POST requests allowed.' }), {
      status: 405
    });
  }

  const {token} = await req.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return new Response(JSON.stringify({ message: 'Failed to process your request.' }), {
      status: 500
    });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    if (response.data.success) {
      return new Response(JSON.stringify({ message: 'Success', isValid: true }), {
        status: 200
      });
    } else {
      return new Response(JSON.stringify({ message: 'Failed', isValid: false }), {
        status: 401
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500
    });
  }
}

