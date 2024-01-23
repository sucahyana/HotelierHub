<?

use App\Traits\ResponseTrait;

class RoomFeature
{
    use ResponseTrait;

    public function index($requestUser)
    {


        return  response()->json('hello', 200,);
    }
}
