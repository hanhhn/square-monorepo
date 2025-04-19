import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { RoutesService } from './routes.service';
import { CreateRouteRequest } from './models/create-route';
import { UpdateRouteRequest } from './models/update-route';
import { RouteDto } from './dtos/route.dto';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new route' })
  @ApiResponse({
    status: 201,
    description: 'The route has been successfully created.',
    type: RouteDto,
  })
  create(@Body() createRoute: CreateRouteRequest): Promise<RouteDto> {
    return this.routesService.create(createRoute);
  }

  @Get()
  @ApiOperation({ summary: 'Get all routes with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Return all routes with their locations.',
    type: RouteDto,
    isArray: true,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    description: 'Field to sort by',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    enum: ['ASC', 'DESC'],
    description: 'Sort order',
  })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('order') order: 'ASC' | 'DESC' = 'DESC'
  ) {
    return this.routesService.findAll(page, limit, sortBy, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a route by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the route with its locations.',
    type: RouteDto,
  })
  @ApiResponse({ status: 404, description: 'Route not found.' })
  findOne(@Param('id') id: string): Promise<RouteDto> {
    return this.routesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a route' })
  @ApiResponse({
    status: 200,
    description: 'The route has been successfully updated.',
    type: RouteDto,
  })
  @ApiResponse({ status: 404, description: 'Route not found.' })
  update(
    @Param('id') id: string,
    @Body() updateRoute: UpdateRouteRequest
  ): Promise<RouteDto> {
    return this.routesService.update(id, updateRoute);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a route' })
  @ApiResponse({
    status: 200,
    description: 'The route has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Route not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.routesService.remove(id);
  }
}
